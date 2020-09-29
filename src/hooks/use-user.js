import { useState, useEffect } from 'react';
import { getUserByUserId } from '../services/firebase';
import useAuthListener from './use-auth-listener';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useAuthListener();

  useEffect(() => {
    async function getUserObjByUserId() {
      const [response] = await getUserByUserId(user.uid);
      setActiveUser({ ...response });
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  return { user: activeUser };
}
