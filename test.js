import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('vPHv7yjXXQQ7lQfL4dTH')
  .collection('cartItems');

firestore.doc('/users/vPHv7yjXXQQ7lQfL4dTH/cartItems/ZXWazaPwfUL3Z7iJ2nO5');
firestore.collection('/users/vPHv7yjXXQQ7lQfL4dTH/cartItems');
