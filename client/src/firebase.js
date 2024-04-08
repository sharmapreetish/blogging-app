// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogging-app-1d08a.firebaseapp.com",
  projectId: "blogging-app-1d08a",
  storageBucket: "blogging-app-1d08a.appspot.com",
  messagingSenderId: "944967451815",
  appId: "1:944967451815:web:8095fb8aa463dd3fd1c782"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);