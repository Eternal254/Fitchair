import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBfpUToP-jJfRM3RFJwen7hf5LmR6ymDBI",
    authDomain: "fitchair1.firebaseapp.com",
    databaseURL: "https://fitchair1-default-rtdb.firebaseio.com",
    projectId: "fitchair1",
    storageBucket: "fitchair1.appspot.com",
    messagingSenderId: "5764322017",
    appId: "1:5764322017:web:205fe6459ea7c7a07b9da0",
    measurementId: "G-CPFCPFESRC"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

console.log("Conexion establecida");

// Ya no le muevan a esta madre, todo funciona correctamente

export { app, database, firestore, storage, analytics, auth };
export default firebaseConfig;