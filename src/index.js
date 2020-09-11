import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import './styles/app.css';
import { firebase, FieldValue } from './lib/firebase';
import { FirebaseContext } from './context';

render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
