import { useEffect, useState } from 'react';
import { useAuthListener } from './use-auth-listener';
import { firebase } from '../lib/firebase';

// TODO: make sure that the final array comes back ordered by time
// TODO: does it make sense to have these functions in here, they seem to be services?

async function hasUserLikedPhoto(userId) {}

async function getUserFollowing(userId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .limit(50)
    .get();

  const [{ following }] = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return following;
}

async function getUserDetailsFromPhoto(userId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();

  const [{ firstName, username }] = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return { firstName, username };
}

async function getUserFollowedPhotos(followingUserIds) {
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', followingUserIds)
    .get();

  const userFollowedPhotos = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      const { username, firstName } = await getUserDetailsFromPhoto(
        photo.userId
      );
      return { username, firstName, ...photo };
    })
  );

  return photosWithUserDetails;
}

export function useFollowedUsersPhotos() {
  const [photos, setPhotos] = useState([]);
  const { userId } = useAuthListener();

  useEffect(() => {
    async function getTimelinePhotos() {
      const followingUserIds = await getUserFollowing(userId);
      const followedUsersPhotos = await getUserFollowedPhotos(followingUserIds);
      setPhotos(followedUsersPhotos);
    }

    getTimelinePhotos();
  }, []);

  return photos;
}

export default useFollowedUsersPhotos;
