import React from 'react';
import hearts from '../assets/hearts.svg';
import './home.css';

function Home() {
  return (
    <div>
      <div>Home</div>
      <div className="play-area">
        <div className="upper-play-area">
          <div className="time-hits">
            <p className="time">Time:</p>
            <p className="hits">Hits:</p>
          </div>
          <div className="hearts">
            <img src={hearts} alt="lives" />
          </div>
        </div>
        <div className="play-box">play Area</div>
      </div>
    </div>
  );
}
export default Home;
