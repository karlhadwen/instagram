import React from 'react';
import { useAuthListener } from '../../hooks';
import Suggestions from './suggestions';
import User from './user';

export default function Sidebar() {
  const { user } = useAuthListener();

  return (
    <div className="sidebar p-4">
      <User username={user.displayName} />
      <Suggestions userId={user.uid} />
    </div>
  );
}
