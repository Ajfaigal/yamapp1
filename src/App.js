import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA16-yzelr9mn9RgOqW-mT3TQpwh2ovF6E",
  authDomain: "yamaapp-8de92.firebaseapp.com",
  databaseURL: "https://yamaapp-8de92-default-rtdb.firebaseio.com/",
  projectId: "yamaapp-8de92",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, 'messages');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const messageList = data ? Object.values(data) : [];
      setMessages(messageList);
    });
  
    return () => dbRef.off(); // Cleanup
  }, []);

  return (
    <div>
      <h1>Firebase Messages</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
