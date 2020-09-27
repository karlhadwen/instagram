import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks';
import { isUserFollowingProfile, toggleFollow } from '../../services/firebase';

export default function Header({
  photosCount,
  followerCount: followers,
  setFollowerCount,
  profile: { docId: profileDocId, userId, fullName, following },
}) {
  const { username: usernameFromUrl } = useParams();
  const { user } = useUser();
  const [isFollowingProfile, setIsFollowingProfile] = useState(undefined);
  const activeBtnFollowState =
    user.username &&
    user.username !== usernameFromUrl &&
    isFollowingProfile !== undefined;

  async function handleToggleFollow() {
    // eslint-disable-next-line no-shadow
    setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
    setFollowerCount(isFollowingProfile ? followers - 1 : followers + 1);

    await toggleFollow(
      isFollowingProfile,
      user.docId,
      profileDocId,
      userId,
      user.userId
    );
  }

  useEffect(() => {
    async function isLoggedInUserFollowingProfile() {
      const isFollowing = await isUserFollowingProfile(user.username, userId);
      setIsFollowingProfile(isFollowing);
    }

    if (user.username && userId) {
      isLoggedInUserFollowingProfile();
    }
  }, [user.username, userId]);

  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      <div className="container flex justify-center">
        <img
          className="rounded-full h-40 w-40 flex"
          src={`/images/avatars/${usernameFromUrl}.jpg`}
          alt=""
        />
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="text-2xl mr-4">{usernameFromUrl}</p>
          {activeBtnFollowState && (
            <button
              className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
              type="button"
              onClick={handleToggleFollow}
            >
              {isFollowingProfile ? 'Unfollow' : 'Follow'}
            </button>
          )}
        </div>
        <div className="container flex mt-4">
          {followers === undefined || following === undefined ? (
            <Skeleton count={1} width={677} height={24} />
          ) : (
            <>
              <p className="mr-10">
                <span className="font-bold">{photosCount}</span> photos
              </p>
              <p className="mr-10">
                <span className="font-bold">{followers}</span>{' '}
                {followers === 1 ? 'follower' : 'followers'}
              </p>
              <p>
                <span className="font-bold">{following?.length}</span> following
              </p>
            </>
          )}
        </div>
        <div className="container mt-4">
          <p className="font-medium">
            {!fullName ? <Skeleton count={1} height={24} /> : fullName}
          </p>
        </div>
      </div>
    </div>
  );
}
