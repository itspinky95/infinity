import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';
import { getFunctions } from 'firebase/functions';

// Initialize Firebase services
const firebaseConfig = {
  apiKey: "AIzaSyAYPH1lwPEo46LDloQ6v2vyepAmvIOvfjw",
  authDomain: "project-infinity-1995.firebaseapp.com",
  databaseURL: "https://project-infinity-1995-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-infinity-1995",
  storageBucket: "project-infinity-1995.appspot.com",
  messagingSenderId: "188436326894",
  appId: "1:188436326894:web:664d66d2c39964786406ff",
  measurementId: "G-8MH6Z908P4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const performance = getPerformance(app);
export const functions = getFunctions(app);

// Export Google sign in method
export const signInWithGoogle = () => signInWithPopup(auth, provider);
