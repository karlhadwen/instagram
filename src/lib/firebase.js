import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCBpRfjMXI0uQ8obfVsUkGDy5jMzorakUY',
  authDomain: 'instagram-yt.firebaseapp.com',
  projectId: 'instagram-yt',
  storageBucket: 'instagram-yt.appspot.com',
  messagingSenderId: '763311512694',
  appId: '1:763311512694:web:fc66f0787342163c791357'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
