// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZtnPgL7qBrhBsXjhU4lU5G-5Z-XBXShg",
  authDomain: "fitchair-64e26.firebaseapp.com",
  databaseURL: "https://fitchair-64e26-default-rtdb.firebaseio.com",
  projectId: "fitchair-64e26",
  storageBucket: "fitchair-64e26.appspot.com",
  messagingSenderId: "1097177597587",
  appId: "1:1097177597587:web:eeaf1aae3b4297248a6f66",
  measurementId: "G-EJJWK7H0ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);