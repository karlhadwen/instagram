import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
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
          fullName,
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
    <div className="container flex mx-auto max-w-xs items-center h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4">
          <img
            src="/images/logo.png"
            alt="Instagram"
            className="mt-2 w-6/12 mb-4"
          />
          {error && (
            <p className="mb-4 text-xs text-red-primary text-center">{error}</p>
          )}

          <form onSubmit={handleSignUp} method="POST">
            <input
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary bg-gray-background rounded mb-2"
              type="text"
              placeholder="Username"
              value={username}
              onChange={({ target }) => setUsername(target.value.toLowerCase())}
            />
            <input
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary bg-gray-background rounded mb-2"
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
            />
            <input
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary bg-gray-background rounded mb-2"
              type="text"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) =>
                setEmailAddress(target.value.toLowerCase())
              }
            />
            <input
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary bg-gray-background rounded mb-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
                isInvalid && 'opacity-50'
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
          <p className="text-sm">
            Have an account?{' '}
            <Link to="/login" className="font-bold text-blue-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
