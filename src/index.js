import React from 'react';
import ReactDOM from 'react-dom';
import whyDidYouRender from '@welldone-software/why-did-you-render';
import './styles/app.css';
import App from './App';
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';

whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: 'green',
  diffNameColor: 'aqua',
  trackAllPureComponents: true
});

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
