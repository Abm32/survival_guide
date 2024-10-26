// src/pages/ResourceCalculator.js
import React, { useState } from 'react';
import './ResourceCalculator.css';

function ResourceCalculator() {
  const [days, setDays] = useState(0);
  const [people, setPeople] = useState(1);
  const [result, setResult] = useState(null);

  const calculateResources = () => {
    const water = people * days * 3;  // 3 liters per person per day
    const food = people * days * 2;   // 2 kg of food per person per day
    setResult({ water, food });
  };

  return (
    <div className="resource-calculator">
      <h2>Resource Calculator</h2>
      <label>
        Number of Days:
        <input type="number" value={days} onChange={(e) => setDays(e.target.value)} />
      </label>
      <label>
        Number of People:
        <input type="number" value={people} onChange={(e) => setPeople(e.target.value)} />
      </label>
      <button onClick={calculateResources}>Calculate</button>
      {result && (
        <div className="result">
          <p>Water Required: {result.water} Liters</p>
          <p>Food Required: {result.food} Kg</p>
        </div>
      )}
    </div>
  );
}

export default ResourceCalculator;
