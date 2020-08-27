import React from 'react';

export default function Comments() {
  return (
    <div className="post__comments p-4 pt-1 pb-4">
      <p className="text-sm text-gray-base mb-1">View all 87 comments</p>
      <p>
        <span className="mr-1 font-bold">@rakim</span>
        <span>Love this place!</span>
      </p>
      <p>
        <span className="mr-1 font-bold">@krsone</span>
        <span>This picture is incredible, really shot.</span>
      </p>
      <p className="text-gray-base uppercase text-xs mt-2">5 hours ago</p>
    </div>
  );
}
