// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-be275.firebaseapp.com",
  projectId: "mern-real-estate-be275",
  storageBucket: "mern-real-estate-be275.firebasestorage.app",
  messagingSenderId: "904864549486",
  appId: "1:904864549486:web:044dd6f2bcd8670e3bf47f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);