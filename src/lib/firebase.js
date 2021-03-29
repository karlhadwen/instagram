import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDkEllVgZ65h84Bt9daHfb8S_g1gsicrYI",
  authDomain: "insta-clone-c3d6e.firebaseapp.com",
  projectId: "insta-clone-c3d6e",
  storageBucket: "insta-clone-c3d6e.appspot.com",
  messagingSenderId: "487130799743",
  appId: "1:487130799743:web:a3213402c50c0f0825694a",
};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
