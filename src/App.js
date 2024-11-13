import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import './App.css';

// Initialize Firebase database instance
const database = getDatabase();

const App = () => {
  const [bayMessages, setBayMessages] = useState({
    bay1: { cycleTime: null, latestMessage: null },
    bay2: { cycleTime: null, latestMessage: null },
    bay3: { cycleTime: null, latestMessage: null },
    bay4: { cycleTime: null, latestMessage: null },
    bay5: { cycleTime: null, latestMessage: null },
  });
  const [error, setError] = useState(null); // Track any potential errors

  useEffect(() => {
    const dbRef = ref(database, 'messages');

    // Listen to changes in the database
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Data from Firebase:", data); // Log raw data for debugging

      // Initialize newBayMessages for each update
      const newBayMessages = {
        bay1: { cycleTime: null, latestMessage: null },
        bay2: { cycleTime: null, latestMessage: null },
        bay3: { cycleTime: null, latestMessage: null },
        bay4: { cycleTime: null, latestMessage: null },
        bay5: { cycleTime: null, latestMessage: null },
      };

      if (typeof data === 'object' && data !== null) { // Verify data is an object
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
        setBayMessages(newBayMessages); // Update state with valid data
        console.log("Updated Bay Messages:", newBayMessages); // Log updated state
      } else {
        setError("Unexpected data format received from Firebase.");
        console.error("Unexpected data format:", data);
      }
    }, (error) => {
      setError("Failed to load data from Firebase.");
      console.error("Firebase data error:", error);
    });
  }, []);

  return (
    <div>
      <h1>I'm evolving</h1>
      {error ? (
        <p>{error}</p> // Display any errors if present
      ) : (
        <div className="bay-container">
          {Object.keys(bayMessages).map((bay) => (
            <div key={bay} className="bay-box">
              <h2>{bay.toUpperCase()}</h2>
              <div>Cycle Time: {bayMessages[bay]?.cycleTime ?? 'No Data'}</div>
              <div>Latest Message: {bayMessages[bay]?.latestMessage ?? 'No Data'}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
