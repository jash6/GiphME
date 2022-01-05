import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4xyz9BHNRUVDAJ3loFmZoF3__NzlUN9c",
  authDomain: "giphme-14fcd.firebaseapp.com",
  projectId: "giphme-14fcd",
  storageBucket: "giphme-14fcd.appspot.com",
  messagingSenderId: "558001135370",
  appId: "1:558001135370:web:87e045639b0fca2062a4f3",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
