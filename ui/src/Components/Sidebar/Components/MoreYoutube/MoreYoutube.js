import React, { Component } from 'react';

import './MoreYoutube.css';

class MoreYoutube extends Component {
  render() {
    return (
      <div className="more-youtube-box">
        <div className="more-youtube">MORE FROM YOUTUBE</div>
        <div className="more-gaming-box">
          <i className="fas fa-dice dice-icon"></i>
          <div className="more-gaming">Gaming</div>
        </div>
        <div className="live-box">
          <i class="fas fa-wifi wifi-right"></i>
          <i class="fas fa-wifi wifi-left"></i>
          <div className="live">Live</div>
        </div>
      </div>
    );
  }
};

export default MoreYoutube;