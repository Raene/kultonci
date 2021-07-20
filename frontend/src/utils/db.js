import firebase from "firebase/app";
import 'firebase/database';
// import store from "../store"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDvkKH_yqJ20MpDQils0FuYsTV5_wstQtI",
  authDomain: "lunar-c17b7.firebaseapp.com",
  databaseURL: "https://lunar-c17b7-default-rtdb.firebaseio.com",
  projectId: "lunar-c17b7",
  storageBucket: "lunar-c17b7.appspot.com",
  messagingSenderId: "929289744224",
  appId: "1:929289744224:web:1bb8f4dee90d7fa223f805"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();