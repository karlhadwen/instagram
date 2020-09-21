import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../components/header';
import UserProfile from '../components/profile';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';

export default function Profile() {
  const { username } = useParams();
  const history = useHistory();
  const [userExists, setUserExists] = useState(undefined);

  useEffect(() => {
    async function checkUserExistsToLoadProfile() {
      const doesUserExist = await getUserByUsername(username);
      if (!doesUserExist) {
        history.push(ROUTES.HOME);
      } else {
        setUserExists(true);
      }
    }
    checkUserExistsToLoadProfile();
  }, []);

  return userExists ? (
    <div className="app bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile username={username} />
      </div>
    </div>
  ) : null;
}
