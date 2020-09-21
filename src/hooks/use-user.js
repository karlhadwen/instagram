import { useState, useEffect } from 'react';
import { useAuthListener } from './use-auth-listener';
import { getUserByUserId } from '../services/firebase';

export function useUser() {
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
  }, [user?.uid]);

  return { user: activeUser };
}

export default useUser;
