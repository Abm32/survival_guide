// src/pages/EmergencyContacts.js
import React, { useState } from 'react';
import './EmergencyContacts.css';

const EmergencyContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = () => {
    setContacts([...contacts, { name, phone }]);
    setName("");
    setPhone("");
  };

  return (
    <div className="emergency-contacts">
      <h2>Emergency Contacts</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={addContact}>Add Contact</button>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact.name}: {contact.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyContacts;
