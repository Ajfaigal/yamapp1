import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
getDatabase(app);
getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring
reportWebVitals();
