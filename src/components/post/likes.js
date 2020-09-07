import React from 'react';

export default function Likes({ total }) {
  return (
    <div className="post__likes p-4 py-0">
      <p className="font-bold">
        {total === 1 ? `${total} like` : `${total} likes`}
      </p>
    </div>
  );
}
