// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./Footer/Footer";
import ZombieSurvival from "./pages/ZombieSurvival";
import AlienInvasion from "./pages/AlienInvasion";
import NuclearFallout from "./pages/NuclearFallout";
import ResourceCalculator from "./pages/ResourcCalculator"; // Import ResourceCalculator
import EmergencyBroadcast from "./pages/EmergencyBroadcast";
import Checklist from "./pages/CheckList";
import EmergencyContacts from "./pages/EmergencyContacts";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <Router>
      <div className={`app ${darkMode ? "dark-mode" : ""}`}>
        <Header />
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <nav className="navigation">
          <Link to="/zombie-survival">Zombie Survival</Link>
          <Link to="/alien-invasion">Alien Invasion</Link>
          <Link to="/nuclear-fallout">Nuclear Fallout</Link>
          <Link to="/resource-calculator">Resource Calculator</Link>
          <Link to="/emergency-broadcast">Emergency Alert</Link>
          <Link to="/checklist">Survival Checklist</Link>
          <Link to="/emergency-contacts">Emergency Contacts</Link>
        </nav>
        <Routes>
          <Route path="/zombie-survival" element={<ZombieSurvival />} />
          <Route path="/alien-invasion" element={<AlienInvasion />} />
          <Route path="/nuclear-fallout" element={<NuclearFallout />} />
          <Route path="/resource-calculator" element={<ResourceCalculator />} />
          <Route path="/emergency-broadcast" element={<EmergencyBroadcast />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
