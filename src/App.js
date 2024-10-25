import React from 'react';
import Header from './components/Header';
import GuideSection from './components/GuideSection';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <GuideSection title="Survival Basics" description="The essentials for outlasting the undead." />
        <GuideSection title="Safe Zones" description="Locate secure areas and strongholds." />
        <GuideSection title="Supply Checklist" description="What you need to stay alive, one day at a time." />
        <GuideSection title="Zombie Behavior" description="Learn how to predict zombie actions." />
      </div>
      <Footer />
    </div>
  );
}

export default App;
