import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6KXn7PIqayg0Avy8LcZOosX8Kh74t6tA",
  authDomain: "reactlinks-68758.firebaseapp.com",
  projectId: "reactlinks-68758",
  storageBucket: "reactlinks-68758.appspot.com",
  messagingSenderId: "1008029094837",
  appId: "1:1008029094837:web:6cf7bcd1e69446d8203ffc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}