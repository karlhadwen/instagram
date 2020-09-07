import React from 'react';

export default function Image({ src }) {
  return (
    <div className="post__img">
      <img src={src} alt="" />
    </div>
  );
}
