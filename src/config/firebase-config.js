// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrQMnd7G5JyYjL-NWqW2okpevLGsq7J2g",
  authDomain: "expense-tracker-4fcf9.firebaseapp.com",
  projectId: "expense-tracker-4fcf9",
  storageBucket: "expense-tracker-4fcf9.appspot.com",
  messagingSenderId: "618042703173",
  appId: "1:618042703173:web:150b3a9c2735fb6b3ad22c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);