import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB59RHMaDtddw--Om6eL6q26-ekwyuEoWk",
  authDomain: "miniblog-5f950.firebaseapp.com",
  projectId: "miniblog-5f950",
  storageBucket: "miniblog-5f950.firebasestorage.app",
  messagingSenderId: "963303823335",
  appId: "1:963303823335:web:11b2f40b368b9972d0cf42"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };