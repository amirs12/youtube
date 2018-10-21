import React, { Component } from 'react';
//import UpNextHeader from './Components/UpNextHeader/UpNextHeader.js';

import './UpNextHeader.css';

class UpNextHeader extends Component {
    render() {
      return (
        <div className="up-next-header">
          <div className="up-next">Up next</div>
          <div className="autoplay-box">
            <div className="autoplay">AUTOPLAY</div>
            <div className="toggle-icon">
              <div className="toggle-bar"></div>
              <div className="toggle-radio"></div>
            </div>
          </div>
        </div>
      );
    }
};

export default UpNextHeader;