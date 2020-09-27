import React from 'react';
import useAuthListener from '../../hooks/use-auth-listener';
import useUser from '../../hooks/use-user';
import Suggestions from './suggestions';
import User from './user';

export default function Sidebar() {
  const {
    user: { fullName },
  } = useUser();
  const { user } = useAuthListener();

  return (
    <div className="sidebar p-4">
      <User username={user.displayName} fullName={fullName} />
      <Suggestions userId={user.uid} />
    </div>
  );
}
