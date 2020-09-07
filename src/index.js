import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles/app.css';
import { firebase } from './lib/firebase';
import { FirebaseContext } from './context/firebase';

render(
  <FirebaseContext.Provider value={{ firebase }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
