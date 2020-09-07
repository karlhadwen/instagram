import React from 'react';

export default function Header({ username }) {
  return (
    <div className="post__header flex items-center align-items justify-between border-b border-gray-primary h-4 p-4 py-8">
      <div className="post__header-user flex items-center">
        <img
          className="rounded-full h-8 w-8 flex mr-3"
          src="/images/me.jpg"
          alt=""
        />
        <p>{username}</p>
      </div>
      <svg
        className="w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    </div>
  );
}
