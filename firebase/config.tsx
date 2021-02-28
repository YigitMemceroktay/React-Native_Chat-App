import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBn3a1RxNkPGl5tLqMVJxPj_vjj3V4c3Hk",
    authDomain: "instagramclone-c5e08.firebaseapp.com",
    projectId: "instagramclone-c5e08",
    storageBucket: "instagramclone-c5e08.appspot.com",
    messagingSenderId: "1035096774607",
    appId: "1:1035096774607:web:39496ce1c01b0d9c59a4ba",
    measurementId: "G-EWE9QW6F9E"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export  default firebase ;
  
  