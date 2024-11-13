import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { app } from './firebaseConfig'; // Ensures Firebase is initialized

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
