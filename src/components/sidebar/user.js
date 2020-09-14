import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthListener } from '../../hooks';

export default function User() {
  const { user } = useAuthListener();

  return (
    <Link
      to={`/p/${user.displayName}`}
      className="grid grid-cols-4 gap-4 mb-6 items-center"
    >
      <div className="user__img flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3"
          src="/images/avatars/karl.jpg"
          alt=""
        />
      </div>
      <div className="user__info col-span-3">
        <p className="font-bold text-sm">karlhadwen</p>
        <p className="text-sm">Karl Hadwen</p>
      </div>
    </Link>
  );
}
