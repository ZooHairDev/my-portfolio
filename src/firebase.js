
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB38NdKwHayjibL-kmLaBM-6669Wt58q0c",
  authDomain: "my-portfolio-8040c.firebaseapp.com",
  projectId: "my-portfolio-8040c",
  storageBucket: "my-portfolio-8040c.appspot.com",
  messagingSenderId: "604741673822",
  appId: "1:604741673822:web:278cd090395b07d621e5cf",
  measurementId: "G-537RNDTLVR"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);