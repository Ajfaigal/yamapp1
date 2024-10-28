import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const client = mqtt.connect('wss://90c5bbbeddd24c75ad90f6e07e9bebd3.s1.eu.hivemq.cloud:8884/mqtt', {
      username: 'your_username',
      password: 'your_password',
      protocol: 'wss',  // WebSocket Secure
    });

    client.on('connect', () => {
      console.log('Connected to HiveMQ Cloud via WebSocket');
      client.subscribe('your/topic');
    });

    client.on('message', (topic, payload) => {
      setMessage(payload.toString());
    });

    return () => client.end();  // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1>MQTT Messages</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
