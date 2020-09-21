import React, { useState, useEffect } from 'react';
import Header from './header';
import Photos from './photos';
import {
  getUserByUsername,
  getUserPhotosByUsername,
} from '../../services/firebase';

export default function Profile({ username }) {
  const [profile, setProfile] = useState({});
  const [photosCollection, setPhotosCollection] = useState();
  const [followerCount, setFollowerCount] = useState(0);

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const [{ ...user }] = await getUserByUsername(username);
      const photos = await getUserPhotosByUsername(username);

      setProfile(user);
      setPhotosCollection(photos);
      setFollowerCount(user.followers.length);
    }
    getProfileInfoAndPhotos();
  }, [username]);

  return (
    <>
      <Header
        photosCount={photosCollection?.length}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={setFollowerCount}
      />
      <Photos photos={photosCollection} />
    </>
  );
}
