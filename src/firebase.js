import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyA_kE3dUS5y3j5iHJJfj-z3O0hEV0wfPrE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "techpro-c0e8a.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "techpro-c0e8a",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "techpro-c0e8a.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "868569753650",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:868569753650:web:b7ac6fc8d60aaead33b42b"
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