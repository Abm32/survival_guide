import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Zombie Apocalypse Survival Guide</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Survival Tips</li>
          <li>Resources</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
