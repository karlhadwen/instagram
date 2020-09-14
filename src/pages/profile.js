import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import UserProfile from '../components/profile';

export default function Profile() {
  const { user: username } = useParams();

  return (
    <div className="app bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile username={username} />
      </div>
    </div>
  );
}
