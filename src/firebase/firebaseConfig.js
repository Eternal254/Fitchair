import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';


import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBUUWDLvNj8dPhNdnNnnc8BNNx-mBKxJ18",
    authDomain: "fitchair-675af.firebaseapp.com",
    databaseURL: "https://fitchair-675af-default-rtdb.firebaseio.com",
    projectId: "fitchair-675af",
    storageBucket: "fitchair-675af.appspot.com",
    messagingSenderId: "812126152242",
    appId: "1:812126152242:web:a079b27b1f5a37f0467e2b",
    measurementId: "G-DQ2G3YW64Y"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 
const firestore = getFirestore(app); 
const storage = getStorage(app); 
const analytics = getAnalytics(app); 
const auth = getAuth(app); 


export { app, database, firestore, storage, analytics, auth};

console.log("Si conetca esta shit");

export default firebaseConfig;