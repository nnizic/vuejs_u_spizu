import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "@/firebaseconfig";

let firebaseconfig = firebaseConfig.firebaseConfig;
firebase.initializeApp(firebaseconfig);

let db = firebase.firestore();
export { firebase, db };
