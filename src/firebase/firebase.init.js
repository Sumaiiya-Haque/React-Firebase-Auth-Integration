// Danger!!!!
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDAcubWRUcrM156qLzhiLFMdjdLJRmnMY",
  authDomain: "react-firebase-authinteg-8b1fc.firebaseapp.com",
  projectId: "react-firebase-authinteg-8b1fc",
  storageBucket: "react-firebase-authinteg-8b1fc.firebasestorage.app",
  messagingSenderId: "1038518466579",
  appId: "1:1038518466579:web:25f3b2c2e1124338b3a7e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);