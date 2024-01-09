// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7t54t9myoEm6jxiaYhYT0vMFKf-OIwAY",
  authDomain: "ruslux-ba31c.firebaseapp.com",
  projectId: "ruslux-ba31c",
  storageBucket: "ruslux-ba31c.appspot.com",
  messagingSenderId: "808836630831",
  appId: "1:808836630831:web:a5b11e7ad39233095c79da",
  measurementId: "G-KK34BYYM3J",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
