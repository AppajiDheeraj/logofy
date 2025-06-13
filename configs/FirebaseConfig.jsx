// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "saas-fc332.firebaseapp.com",
  projectId: "saas-fc332",
  storageBucket: "saas-fc332.firebasestorage.app",
  messagingSenderId: "1051459026098",
  appId: "1:1051459026098:web:3ce6cf3a84e391de2d9dab",
  measurementId: "G-ZKBQLXFYLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);