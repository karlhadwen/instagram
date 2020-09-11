import React, { useEffect, useContext } from 'react';
import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';
import { FirebaseContext } from '../context';

export default function Home() {
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword('karlhadwen@gmail.com', 'test123')
      .then(() => {});
  }, []);

  return (
    <div className="app bg-gray-background">
      <Header />
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}
