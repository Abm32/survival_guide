// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  const printGuide = () => {
    window.print();
  };

  return (
    <header className="header flicker">
      <h1>Apocalypse Survival Guide</h1>
      <p>Surviving against all odds: Zombies, Aliens, and more...</p>
      <button onClick={printGuide}>Print Survival Guide</button>
    </header>
  );
}

export default Header;
