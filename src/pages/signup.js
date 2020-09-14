import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context';
import * as ROUTES from '../constants/routes';
import { doesUsernameExist } from '../services/firebase';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignUp = async (event) => {
    event.preventDefault();

    if ((await doesUsernameExist(username)) === false) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        await firebase.firestore().collection('users').add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName: fullName.toLowerCase(),
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          dateCreated: Date.now(),
        });

        history.push(ROUTES.HOME);
      } catch (error) {
        setFullName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      }
    } else {
      setError('That username is already taken, please try another.');
    }
  };

  useEffect(() => {
    document.title = 'Sign Up - Instagram';
  }, []);

  return (
    <div className="container">
      {error && <p>{error}</p>}

      <form onSubmit={handleSignUp} method="POST">
        <input
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="text"
          placeholder="Username"
          value={username}
          onChange={({ target }) => setUsername(target.value.toLowerCase())}
        />
        <input
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
        />
        <input
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="text"
          placeholder="Email address"
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value.toLowerCase())}
        />
        <input
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
