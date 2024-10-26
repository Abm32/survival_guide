// src/pages/AlienInvasion.js
import React from 'react';
import GuideSection from '../components/GuideSection';
import './AlienInvasion.css';

function AlienInvasion() {
  return (
    <div className="alien-invasion">
      <GuideSection title="Alien Types and Tactics" description="Analyze alien behaviors and technology." />
      <GuideSection title="Defense Mechanisms" description="Camouflage techniques and weapon insights." />
      <GuideSection title="Communication" description="Avoid alien signals or understand their messages." />
      <GuideSection title="Safe Zones" description="Underground bunkers, remote locations." />
    </div>
  );
}

export default AlienInvasion;
