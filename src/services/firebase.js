// PACKAGES
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// initialize firebase app
const app = firebase.initializeApp({
  apiKey: "AIzaSyAqCrIARR8u4w6GNmEks_sLbpqkjUSQk5c",
  authDomain: "safeq-d38d8.firebaseapp.com",
  projectId: "safeq-d38d8",
  storageBucket: "safeq-d38d8.appspot.com",
  messagingSenderId: "123766075732",
  appId: "1:123766075732:web:88ea76a4c804c0cba518c1",
  measurementId: "G-H256572CNY",
});

export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();
export default app;
