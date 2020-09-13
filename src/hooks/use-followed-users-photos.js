import { useEffect, useState } from 'react';
import { useAuthListener } from './use-auth-listener';
import { getUserFollowing, getUserFollowedPhotos } from '../services/firebase';

// TODO: make sure that the final array comes back ordered by time (posts)
export function useFollowedUsersPhotos() {
  const [photos, setPhotos] = useState([]);
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

      setPhotos(followedUsersPhotos);
    }

    getTimelinePhotos();
  }, []);

  return photos;
}

export default useFollowedUsersPhotos;
