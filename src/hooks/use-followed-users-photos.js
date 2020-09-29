import { useEffect, useState, useContext } from 'react';
import { getUserFollowing, getUserFollowedPhotos } from '../services/firebase';
import UserContext from '../context/user';

export default function useFollowedUsersPhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = '' }
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      const followingUserIds = await getUserFollowing(userId);
      let followedUsersPhotos = [];

      if (followingUserIds.length > 0) {
        followedUsersPhotos = await getUserFollowedPhotos(userId, followingUserIds);
      }

      followedUsersPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUsersPhotos);
    }
    getTimelinePhotos();
  }, [userId]);

  return { photos };
}
