// src/pages/Checklist.js
import React, { useState } from 'react';
import './CheckList.css';

const Checklist = () => {
  const tasks = [
    "Gather Food Supplies",
    "Collect Water Resources",
    "Prepare Shelter",
    "Secure Medical Kit",
    "Pack Communication Devices"
  ];
  const [checkedTasks, setCheckedTasks] = useState([]);

  const toggleTask = (task) => {
    setCheckedTasks((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );
  };

  return (
    <div className="checklist">
      <h2>Survival Checklist</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={checkedTasks.includes(task) ? "completed" : ""}>
            <input
              type="checkbox"
              checked={checkedTasks.includes(task)}
              onChange={() => toggleTask(task)}
            />
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
