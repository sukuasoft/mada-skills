import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBNzlmk8Vhzw9Opvl4YxPfqS_GClBLC38",
  authDomain: "madaskills-1c26b.firebaseapp.com",
  projectId: "madaskills-1c26b",
  storageBucket: "madaskills-1c26b.firebasestorage.app",
  messagingSenderId: "285512978683",
  appId: "1:285512978683:web:25cd79e7dacfc91075a05e",
  measurementId: "G-VC7DV9NLHF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore =getFirestore(app);
