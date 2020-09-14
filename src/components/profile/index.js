import React, { useState, useEffect } from 'react';
import Header from './header';
import Photos from './photos';
import { getUserByUsername } from '../../services/firebase';

export default function Profile({ username }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function getProfileInfo() {
      const [{ ...user }] = await getUserByUsername(username);
      setProfile(user);
    }
    getProfileInfo();
  }, []);

  return (
    <>
      <Header
        fullName={profile.fullName}
        followingCount={profile.following?.length}
        followersCount={profile.followers?.length}
      />
      <Photos />
    </>
  );
}
