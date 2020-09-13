import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';

export default function Profile() {
  const { user } = useParams();

  return (
    <div className="app bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p>Profile/photos here for {user}</p>
      </div>
    </div>
  );
}
