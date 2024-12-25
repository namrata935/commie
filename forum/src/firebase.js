// Import the necessary functions from the SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase web app's configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8Y1wpkQ3FctoIv3Otg9ibBf1tVYJm6wY",
  authDomain: "aqua-alert-34f63.firebaseapp.com",
  projectId: "aqua-alert-34f63",
  storageBucket: "aqua-alert-34f63.firebasestorage.app",
  messagingSenderId: "601823746623",
  appId: "1:601823746623:web:7c42566e17f2f4c725b68a",
  measurementId: "G-RVNHNK8ZB7"
};

// Initialize Firebase app
initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();

// Initialize Firebase Analytics (optional)
getAnalytics();

// Export the Firebase services
export { auth, provider, db };
