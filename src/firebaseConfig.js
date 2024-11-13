// firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA16-yzelr9mn9RgOqW-mT3TQpwh2ovF6E",
  authDomain: "yamaapp-8de92.firebaseapp.com",
  databaseURL: "https://yamaapp-8de92-default-rtdb.firebaseio.com/",
  projectId: "yamaapp-8de92",
  storageBucket: "yamaapp-8de92.appspot.com",
  messagingSenderId: "989538926135",
  appId: "1:989538926135:web:f61797551ab998e5a049b2",
  measurementId: "G-NZR6MZFNYX"
};

// Initialize Firebase app if none exists
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

const database = getDatabase(app);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { app, database, analytics, firestore };
