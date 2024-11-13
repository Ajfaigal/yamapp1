import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import './App.css';

const database = getDatabase();

const App = () => {
  const [bayMessages, setBayMessages] = useState({
    bay1: { cycleTime: null, latestMessage: null },
    bay2: { cycleTime: null, latestMessage: null },
    bay3: { cycleTime: null, latestMessage: null },
    bay4: { cycleTime: null, latestMessage: null },
    bay5: { cycleTime: null, latestMessage: null },
  });

  useEffect(() => {
    const dbRef = ref(database, 'messages');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const newBayMessages = { ...bayMessages };

      Object.entries(data).forEach(([key, value]) => {
        if (key.startsWith('CycleTime')) {
          const bayNumber = key.replace('CycleTime', '');
          const bayKey = `bay${bayNumber}`;
          if (newBayMessages[bayKey]) {
            newBayMessages[bayKey].cycleTime = value;
          }
        } else {
          for (let i = 1; i <= 5; i++) {
            const bayKey = `bay${i}`;
            newBayMessages[bayKey].latestMessage = value;
          }
        }
      });

      setBayMessages(newBayMessages);
    });
  }, []);

  return (
    <div>
      <h1>Firebase Messages</h1>
      <div className="bay-container">
        {Object.keys(bayMessages).map((bay) => (
          <div key={bay} className="bay-box">
            <h2>{bay.toUpperCase()}</h2>
            <div>Cycle Time: {bayMessages[bay].cycleTime || 'No Data'}</div>
            <div>Latest Message: {bayMessages[bay].latestMessage || 'No Data'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

