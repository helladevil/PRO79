import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBdEn_5TbTGN149EOPXc2WBHtH-uEuvxus",
  authDomain: "bici4-21a9f.firebaseapp.com",
  projectId: "bici4-21a9f",
  storageBucket: "bici4-21a9f.appspot.com",
  messagingSenderId: "502923477602",
  appId: "1:502923477602:web:dc3298d588592ba831473b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
