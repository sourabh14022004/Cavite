import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCyTXAtW9Qrb28IWiNwmFsQ6W7dUyHMRk0",
  authDomain: "cavite-72062.firebaseapp.com",
  projectId: "cavite-72062",
  storageBucket: "cavite-72062.firebasestorage.app",
  messagingSenderId: "3025293665",
  appId: "1:3025293665:web:c08f2880f2a14de3443520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
