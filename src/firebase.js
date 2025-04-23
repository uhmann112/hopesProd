// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDms6HziPEbTONHMdYug_JMBQK1s2cv6ao",
  authDomain: "hopes-fef29.firebaseapp.com",
  projectId: "hopes-fef29",
  storageBucket: "hopes-fef29.firebasestorage.app",
  messagingSenderId: "739000427706",
  appId: "1:739000427706:web:d03ced272bb056959b0e83",
  measurementId: "G-VBWXQR7KE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { app, analytics, db };