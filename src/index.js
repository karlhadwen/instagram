import React from 'react';
import { render } from 'react-dom';
import whyDidYouRender from '@welldone-software/why-did-you-render';
import { App } from './App';
import './styles/app.css';
import { firebase, FieldValue } from './lib/firebase';
import { FirebaseContext } from './context';

whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: 'green',
  diffNameColor: 'aqua',
  trackAllPureComponents: true,
});

render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
