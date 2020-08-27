import React from 'react';
import Post from './post';

export default function Timeline() {
  return (
    <div className="container col-span-2">
      <Post />
      <Post />
      <Post />
    </div>
  );
}
