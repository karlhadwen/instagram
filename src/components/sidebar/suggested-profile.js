import React from 'react';

export default function User() {
  return (
    <div className="suggested-user flex flex-row items-center align-items justify-between">
      <div className="suggested-user__info flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src="/images/me.jpg"
          alt=""
        />
        <p className="font-bold text-sm">karlhadwen</p>
      </div>
      <div className="suggested-user__follow">
        <button className="text-xs font-bold text-blue-medium" type="button">
          Follow
        </button>
      </div>
    </div>
  );
}
