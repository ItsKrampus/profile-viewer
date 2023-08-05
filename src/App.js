import React from 'react';
import PersonCarousel from './PersonCarousel';
import './App.css';


const App = () => {
  return (
    <div className="main" class="container mt-5">
      <h1>People Showcase</h1>
      <PersonCarousel />
    </div>
  );
};

export default App;