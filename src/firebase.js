
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCl9N6IlqL08YQLTaoHIn_37oLas40b4M0",
  authDomain: "my-portfolio-31c20.firebaseapp.com",
  projectId: "my-portfolio-31c20",
  storageBucket: "my-portfolio-31c20.appspot.com",
  messagingSenderId: "963293467664",
  appId: "1:963293467664:web:f1d851a5920b6cdde12695",
  measurementId: "G-EDQHDDLE2T"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);