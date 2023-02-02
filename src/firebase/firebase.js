// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKX9k7DdBPU83cosVGcVz6QziY4UK4K5U",
  authDomain: "tinyurl-url.firebaseapp.com",
  projectId: "tinyurl-url",
  storageBucket: "tinyurl-url.appspot.com",
  messagingSenderId: "609028366753",
  appId: "1:609028366753:web:0a52ad6e085575ca82abe0",
  measurementId: "G-XMDRW32VC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);