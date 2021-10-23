import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyA5TWE1Wpo6DpRmqzF6YCaCk557SW1yORw",
  authDomain: "agro-d1a99.firebaseapp.com",
  projectId: "agro-d1a99",
  storageBucket: "agro-d1a99.appspot.com",
  messagingSenderId: "478702767180",
  appId: "1:478702767180:web:08367c84713cf5127fb8e9",
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
