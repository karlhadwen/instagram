import React, { useState, useEffect } from 'react';
import Header from './header';
import Photos from './photos';
import {
  getUserByUsername,
  getUserPhotosByUsername,
} from '../../services/firebase';

export default function Profile({ username }) {
  const [profile, setProfile] = useState({});
  const [photosCollection, setPhotosCollection] = useState([]);

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const [{ ...user }] = await getUserByUsername(username);
      const photos = await getUserPhotosByUsername(username);

      setProfile(user);
      setPhotosCollection(photos);
    }
    getProfileInfoAndPhotos();
  }, []);

  return (
    <>
      <Header
        fullName={profile.fullName}
        followingCount={profile.following?.length}
        followersCount={profile.followers?.length}
      />
      <Photos photos={photosCollection} />
    </>
  );
}
