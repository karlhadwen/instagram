import { useEffect, useState } from 'react';
import { useAuthListener } from './use-auth-listener';
import { getUserFollowing, getUserFollowedPhotos } from '../services/firebase';

export function useFollowedUsersPhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = '' },
  } = useAuthListener();

  useEffect(() => {
    async function getTimelinePhotos() {
      const followingUserIds = await getUserFollowing(userId);
      let followedUsersPhotos = [];

      if (followingUserIds.length > 0) {
        followedUsersPhotos = await getUserFollowedPhotos(
          userId,
          followingUserIds
        );
      }

      followedUsersPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUsersPhotos);
    }
    getTimelinePhotos();
  }, []);

  return photos;
}

export default useFollowedUsersPhotos;
