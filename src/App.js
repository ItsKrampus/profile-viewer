import React from 'react';
import PersonCarousel from './PersonCarousel';
import './App.css';



const App = () => {
  return (
    
    <div className='mainbox'>
      <div className='gacentreba'>
      <h1 className='blue-underline'>Our Reviews</h1>
      </div>
      <div className='konteineri'>
      <PersonCarousel />
      </div>
      
    </div>
  );
};

export default App;