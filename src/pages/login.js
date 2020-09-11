import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context';
import * as ROUTES from '../constants/routes';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };
  return (
    <form onSubmit={handleSignin} method="POST">
      <input
        className="text-sm text-gray-base w-full mr-3 py-5 px-4"
        type="text"
        name="email-address"
        placeholder="Email address"
        onChange={({ target }) => setEmailAddress(target.value)}
      />
      <input
        className="text-sm text-gray-base w-full mr-3 py-5 px-4"
        type="password"
        name="password"
        placeholder="Password"
        onChange={({ target }) => setPassword(target.value)}
      />
      <button disabled={isInvalid} type="submit">
        Login
      </button>
    </form>
  );
}
