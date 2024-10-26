// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './Footer/Footer';
import ZombieSurvival from './pages/ZombieSurvival';
import AlienInvasion from './pages/AlienInvasion';
import NuclearFallout from './pages/NuclearFallout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <nav className="navigation">
          <Link to="/zombie-survival">Zombie Survival</Link>
          <Link to="/alien-invasion">Alien Invasion</Link>
          <Link to="/nuclear-fallout">Nuclear Fallout</Link>
        </nav>
        <Routes>
          <Route path="/zombie-survival" element={<ZombieSurvival />} />
          <Route path="/alien-invasion" element={<AlienInvasion />} />
          <Route path="/nuclear-fallout" element={<NuclearFallout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
