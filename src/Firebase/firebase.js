// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKYODXluyIynxd2r7pLbZLRMm0kiDM1NY",
  authDomain: "menujs-react.firebaseapp.com",
  projectId: "menujs-react",
  storageBucket: "menujs-react.firebasestorage.app",
  messagingSenderId: "898405765081",
  appId: "1:898405765081:web:36180ec65e2694c62f93c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);