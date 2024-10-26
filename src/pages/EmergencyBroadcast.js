// src/pages/EmergencyBroadcast.js
import React, { useState } from 'react';
import './EmergencyBroadcast.css';

function EmergencyBroadcast() {
  const [alert, setAlert] = useState(false);

  const triggerAlert = () => {
    setAlert(true);
    const audio = new Audio('/assets/alert-sound.mp3');
    audio.play();
    setTimeout(() => setAlert(false), 5000);  // Alert lasts for 5 seconds
  };

  return (
    <div className="emergency-broadcast">
      <h2>Emergency Broadcast</h2>
      <button onClick={triggerAlert}>Trigger Emergency Alert</button>
      {alert && <div className="alert-message">** EMERGENCY BROADCAST **</div>}
    </div>
  );
}

export default EmergencyBroadcast;
