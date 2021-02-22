import '../App.css';
import './HeroSection.css';

import { Button } from './Button';
import React from 'react';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/vinylRecord.mp4' autoPlay loop muted />
      <h1>REVAMP TECH</h1>
      <p>Let's Build Together!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          About Us
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('Welcome!')}
        >
          CONNECT <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
