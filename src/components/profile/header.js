import React from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export default function Header({
  fullName,
  photosCount,
  followingCount,
  followersCount,
}) {
  const { user: usernameFromUrl } = useParams();

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
          <button
            className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
            type="button"
          >
            Follow
          </button>
        </div>
        <div className="container flex mt-4">
          {followersCount === undefined || followingCount === undefined ? (
            <Skeleton count={1} width={677} height={24} />
          ) : (
            <>
              <p className="mr-10">
                <span className="font-bold">{photosCount}</span> photos
              </p>
              <p className="mr-10">
                <span className="font-bold">{followersCount}</span> followers
              </p>
              <p>
                <span className="font-bold">{followingCount}</span> following
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
