// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfpUToP-jJfRM3RFJwen7hf5LmR6ymDBI",
  authDomain: "fitchair1.firebaseapp.com",
  databaseURL: "https://fitchair1-default-rtdb.firebaseio.com",
  projectId: "fitchair1",
  storageBucket: "fitchair1.appspot.com",
  messagingSenderId: "5764322017",
  appId: "1:5764322017:web:d5fb5fc4fcfa84bd7b9da0",
  measurementId: "G-9R8HRDHE6V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
