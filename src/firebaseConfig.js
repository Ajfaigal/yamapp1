import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA16-yzelr9mn9RgOqW-mT3TQpwh2ovF6E",
  authDomain: "yamaapp-8de92.firebaseapp.com",
  projectId: "yamaapp-8de92",
  storageBucket: "yamaapp-8de92.appspot.com",
  messagingSenderId: "989538926135",
  appId: "1:989538926135:web:f61797551ab998e5a049b2",
  measurementId: "G-NZR6MZFNYX"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

export const database = getDatabase(app);
