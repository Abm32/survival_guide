import React from 'react';
import './GuideSection.css';

function GuideSection({ title, description }) {
  return (
    <section className="guide-section">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export default GuideSection;
