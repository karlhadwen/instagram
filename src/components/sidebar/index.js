import React from 'react';
import Suggestions from './suggestions';
import User from './user';

export default function Sidebar() {
  return (
    <div className="sidebar p-4">
      <User />
      <Suggestions />
    </div>
  );
}
