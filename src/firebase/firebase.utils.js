import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDG1T6XJPIBJ4kK4nr8nN6staona8hyNpU',
  authDomain: 'crown-site.firebaseapp.com',
  databaseURL: 'https://crown-site.firebaseio.com',
  projectId: 'crown-site',
  storageBucket: 'crown-site.appspot.com',
  messagingSenderId: '18115629185',
  appId: '1:18115629185:web:f71d213736019a74b4bd80',
  measurementId: 'G-HEWV6L0X5V',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
