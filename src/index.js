import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import App from './App';
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
