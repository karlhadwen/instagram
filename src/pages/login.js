import React, { useState, useEffect, useContext } from 'react';
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

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }

    history.push(ROUTES.HOME);
  };

  useEffect(() => {
    document.title = `Login - Instagram`;
  }, []);

  return (
    <div className="container">
      {error && <p>{error}</p>}

      <form onSubmit={handleLogin} method="POST">
        <input
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="text"
          placeholder="Email address"
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <input
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="password"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button disabled={isInvalid} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
