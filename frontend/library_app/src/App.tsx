import React from 'react';
import './App.css';
import { Carousel } from './layouts/HomePage/Carousel';
import { ExploreToBooks } from './layouts/HomePage/ExploreToBooks';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreToBooks />  
      <Carousel />    
    </div>
    
  );
}

export default App;
