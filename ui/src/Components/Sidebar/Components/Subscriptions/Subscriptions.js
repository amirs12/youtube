import React, { Component } from 'react';

import './Subscriptions.css';

class Subscriptions extends Component {
  render() {
    return (
      <div className="subscriptions-box">
        <div className="subscriptions">SUBSCRIPTIONS</div>
        <div className="popular-box">
          <div className="popular-wrapper">
            <i class="fas fa-tint"></i>
          </div>
          <div className="popular">Popular on YouTu...</div>
        </div>
        <div className="music-box">
          <div className="music-wrapper">
            <i class="fab fa-itunes-note"></i>
          </div>
          <div className="music">Music</div>
        </div>
        <div className="sports-box">
          <div className="sports-wrapper">
            <i class="fas fa-futbol"></i>
          </div>
          <div className="sports">Sports</div>
        </div>
        <div className="gaming-box">
          <div className="gaming-wrapper">
            <i class="fas fa-dice"></i>
          </div>
          <div className="gaming">Gaming</div>
        </div>
      </div>
    );
  }
};

export default Subscriptions;