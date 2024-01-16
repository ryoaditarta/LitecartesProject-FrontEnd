// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-kslb-7-siOlOtV5ccfjiFMZx8keoxQk",
  authDomain: "litecartes.firebaseapp.com",
  databaseURL: "https://litecartes-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "litecartes",
  storageBucket: "litecartes.appspot.com",
  messagingSenderId: "637638186888",
  appId: "1:637638186888:web:e36193db2bc0963ab30c3d",
  measurementId: "G-76Z6E4DYEE"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FIREBASE_APP) ;
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);