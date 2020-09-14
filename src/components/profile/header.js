import React from 'react';
import { useParams } from 'react-router-dom';

export default function Header({
  fullName,
  followingCount = [],
  followersCount = [],
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
        <div className="container">
          <p className="text-2xl">{usernameFromUrl}</p>
        </div>
        <div className="container flex mt-4">
          <p className="mr-10">
            <span className="font-bold">62</span> posts
          </p>
          <p className="mr-10">
            <span className="font-bold">{followersCount}</span> followers
          </p>
          <p>
            <span className="font-bold">{followingCount}</span> following
          </p>
        </div>
        <div className="container mt-4">
          <p className="font-medium">{fullName}</p>
        </div>
      </div>
    </div>
  );
}
