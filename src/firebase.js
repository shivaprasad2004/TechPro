import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Debug: Check if keys are loaded
if (!firebaseConfig.apiKey) {
  console.error("Firebase Configuration Error: Missing API Key. Check your .env file or Vercel Environment Variables.");
  // Optional: Alert the user if running in browser
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      alert("Critical Error: Firebase configuration is missing. If you are on Vercel, please set the Environment Variables in Settings.");
    }, 1000);
  }
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;