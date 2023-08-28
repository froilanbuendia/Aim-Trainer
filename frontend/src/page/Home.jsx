import React from 'react';
import Navbar from '../components/navbar';
import Timer from '../components/Timer';
import hearts from '../assets/hearts.svg';
import './home.css';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="play-area">
          <div className="upper-play-area">
            <div className="time-hits">
              <Timer />
              <p className="hits">Hits:</p>
            </div>
            <div className="hearts">
              <img src={hearts} alt="lives" />
            </div>
          </div>
          <div className="play-box">play Area</div>
        </div>
      </div>
    </div>
  );
}
export default Home;
