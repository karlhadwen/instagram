import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  getUserByUserId,
  updateUserFollowing,
  updateFollowedUserFollowers,
} from '../../services/firebase';

const SuggestedProfile = ({
  userDocId,
  username,
  profileId,
  userId,
  forceUpdate,
}) => {
  async function handleFollowUser() {
    const [{ docId }] = await getUserByUserId(userId);
    await updateUserFollowing(docId, profileId, false);
    await updateFollowedUserFollowers(userDocId, profileId);
    forceUpdate();
  }

  return (
    <div className="suggested-user flex flex-row items-center align-items justify-between">
      <div className="suggested-user__info flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <div className="suggested-user__follow">
        <button
          className="text-xs font-bold text-blue-medium"
          type="button"
          onClick={handleFollowUser}
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default memo(SuggestedProfile);
