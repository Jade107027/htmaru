import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyD11DcM2Cxb92Iq27rTqhhjAtB4jExNBeU",
  authDomain: "htmaru-cf73e.firebaseapp.com",
  projectId: "htmaru-cf73e",
  storageBucket: "htmaru-cf73e.firebasestorage.app",
  messagingSenderId: "715371740744",
  appId: "1:715371740744:web:9486446065a8782acfa27d",
  measurementId: "G-2FGGFT8BBW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 