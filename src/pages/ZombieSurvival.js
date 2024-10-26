// src/pages/ZombieSurvival.js
import React from 'react';
import GuideSection from '../components/GuideSection';
import './ZombieSurvival.css';

function ZombieSurvival() {
  return (
    <div className="zombie-survival">
      <GuideSection title="Survival Basics" description="Outlast the undead with these tips." />
      <GuideSection title="Escape Routes" description="Know where to go when danger hits." />
      <GuideSection title="Zombie Behaviors" description="Understand how zombies react and move." />
      <GuideSection title="Supply Checklist" description="Items that will keep you alive." />
    </div>
  );
}

export default ZombieSurvival;
