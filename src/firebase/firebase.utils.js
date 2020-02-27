import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDG1T6XJPIBJ4kK4nr8nN6staona8hyNpU',
  authDomain: 'crown-site.firebaseapp.com',
  databaseURL: 'https://crown-site.firebaseio.com',
  projectId: 'crown-site',
  storageBucket: 'crown-site.appspot.com',
  messagingSenderId: '18115629185',
  appId: '1:18115629185:web:f71d213736019a74b4bd80',
  measurementId: 'G-HEWV6L0X5V'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
