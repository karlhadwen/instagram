import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignup = (event) => {
    event.preventDefault();

    // does username exist

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: username,
          })
          .then(() => {
            firebase.firestore().collection('users').add({
              userId: result.user.uid,
              username: username.toLowercase(),
              firstName,
              emailAddress,
              following: [],
              dateCreated: Date.now(),
            });
            // history.push(ROUTES.HOME);
          })
      )
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSignup} method="POST">
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
        placeholder="First name"
        value={firstName}
        onChange={({ target }) => setFirstName(target.value)}
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
  );
}
