// src/pages/NuclearFallout.js
import React from 'react';
import GuideSection from '../components/GuideSection';
import './NuclearFallout.css';

function NuclearFallout() {
  return (
    <div className="nuclear-fallout">
      <GuideSection title="Evacuation Plans" description="Distance to travel, safe locations." />
      <GuideSection title="Protection from Radiation" description="Clothing, shelters, and decontamination." />
      <GuideSection title="Essential Supplies" description="Iodine tablets, clean water, preserved food." />
      <GuideSection title="Surviving Long-Term" description="Growing food, creating secure shelter." />
    </div>
  );
}

export default NuclearFallout;
