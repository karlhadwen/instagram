import { useEffect, useState } from 'react';
import { useAuthListener } from './use-auth-listener';
import { firebase } from '../lib/firebase';

// TODO: make sure that the final array comes back ordered by time
// TODO: does it make sense to have these functions in here, they seem to be services?

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

  const [{ username }] = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return { username };
}

async function getUserFollowedPhotos(userId, followingUserIds) {
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
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const { username } = await getUserDetailsFromPhoto(photo.userId);
      return { username, ...photo, userLikedPhoto };
    })
  );

  return photosWithUserDetails;
}

export function useFollowedUsersPhotos() {
  const [photos, setPhotos] = useState([]);
  const {
    user: { uid: userId },
  } = useAuthListener();

  useEffect(() => {
    async function getTimelinePhotos() {
      const followingUserIds = await getUserFollowing(userId);
      const followedUsersPhotos = await getUserFollowedPhotos(
        userId,
        followingUserIds
      );
      setPhotos(followedUsersPhotos);
    }

    getTimelinePhotos();
  }, []);

  return photos;
}

export default useFollowedUsersPhotos;
