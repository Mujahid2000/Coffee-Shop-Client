// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOVlzmu6-8SiIrp7kVB1GRLiONM8Eqt_4",
  authDomain: "coffee-store-7c12f.firebaseapp.com",
  projectId: "coffee-store-7c12f",
  storageBucket: "coffee-store-7c12f.appspot.com",
  messagingSenderId: "299181486911",
  appId: "1:299181486911:web:58c2080c6b85901393d98a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;