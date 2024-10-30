import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from './firebaseConfig'; // Use the exported database instance

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, 'messages');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const messageList = data ? Object.values(data) : [];
      setMessages(messageList);
    });
  }, []);

  return (
    <div>
      <h1>Firebase Messages</h1>
      {messages.length === 0 ? (
        <p>I'm here and working, just waiting on data...</p>
      ) : (
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
