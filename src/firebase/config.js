// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3LCd3DkiDXsX631ndUCuq1hZtBFsvRkg",
  authDomain: "online-store-1f94b.firebaseapp.com",
  projectId: "online-store-1f94b",
  storageBucket: "online-store-1f94b.firebasestorage.app",
  messagingSenderId: "122451595008",
  appId: "1:122451595008:web:bc177abb6f942c7462ede5",
  measurementId: "G-HMFM22GVDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

export default app;
