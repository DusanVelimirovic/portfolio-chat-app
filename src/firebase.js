// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ-WQBfahgjmIwUwNCeNYfAcIkP1NC28U",
  authDomain: "chat-c575a.firebaseapp.com",
  projectId: "chat-c575a",
  storageBucket: "chat-c575a.appspot.com",
  messagingSenderId: "392046717991",
  appId: "1:392046717991:web:76cc7994473dcfb2b37202"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// Create a root reference
export const storage = getStorage();
export const db = getFirestore();
//export const db = getFirestore(app);
