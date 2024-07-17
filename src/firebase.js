import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCW7aqfA1HQztPmslxlEcl7dozSSkpOiQs",

  authDomain: "u-spizu-f9f4e.firebaseapp.com",

  projectId: "u-spizu-f9f4e",

  storageBucket: "u-spizu-f9f4e.appspot.com",

  messagingSenderId: "196801514958",

  appId: "1:196801514958:web:64bdd2378e9e82cc9a6f9f",

  measurementId: "G-0CS2CN739G",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
