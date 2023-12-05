import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyBboheHJsf06Y4V6heJym9pjLOn_zeIOmA",
  authDomain: "notes-app-zhahnur.firebaseapp.com",
  projectId: "notes-app-zhahnur",
  storageBucket: "notes-app-zhahnur.appspot.com",
  messagingSenderId: "690461670819",
  appId: "1:690461670819:web:d06a9c50f61ad4f2af6e16"
});

const FIREBASE = firebase;

export default FIREBASE;