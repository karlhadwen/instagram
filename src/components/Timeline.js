import React from 'react';
import Post from './Post';
import Suggestions from './Suggestions';

export default function Timeline() {
  return (
    <div className="container mx-auto max-w-screen-lg grid grid-cols-6 gap-6">
      <Post />
      <Suggestions />
    </div>
  );
}
