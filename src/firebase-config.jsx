import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBgBB0Tuh58TgeO-3ocffHP0IbSxhSxy3A",
  authDomain: "fir-tut-59597.firebaseapp.com",
  projectId: "fir-tut-59597",
  storageBucket: "fir-tut-59597.appspot.com",
  messagingSenderId: "248039406139",
  appId: "1:248039406139:web:f11c0e7c4977b3c9323a1e",
  measurementId: "G-VFZETC1S6H"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)