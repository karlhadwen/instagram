import { useState, useEffect } from 'react';
import { getUserByUserId } from '../services/firebase';
import useAuthListener from './use-auth-listener';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useAuthListener();

  useEffect(() => {
    async function suggestedProfiles() {
      const [response] = await getUserByUserId(user.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      suggestedProfiles();
    }
  }, [user]);

  return { user: activeUser };
}
