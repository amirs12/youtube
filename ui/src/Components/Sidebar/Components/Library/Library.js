import React, { Component } from 'react';
import './Library.css';

class Library extends Component {
  render() {
    return (
      <div className="library-box">
        <div className="library">LIBRARY</div>
        <div className="history-box">
          <i class="far fa-clock"></i>
          <div className="history">History</div>
        </div>
        <div className="later-box">
          <i class="fas fa-clock"></i>
          <div className="later">Watch later</div>
        </div>
        <div className="playlist-box">
          <i class="fas fa-bars"></i>
          <div className="playlist">playlist</div>
        </div>
        <div className="israeli-box">
          <i class="fas fa-bars"></i>
          <div className="israeli">Israeli mix</div>
        </div>
        <div className="show-more-box">
          <i class="fas fa-chevron-down"></i>
          <div className="show-more-text">Show more</div>
        </div>
      </div>
    );
  }
};

export default Library;