// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB-9GNWMZonog5R1mWwJDeqK2zDawod3Ts",
  authDomain: "textile-process-management.firebaseapp.com",
  projectId: "textile-process-management",
  storageBucket: "textile-process-management.appspot.com",
  messagingSenderId: "940607020848",
  appId: "1:940607020848:web:84f443aa16d2240182f2f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
