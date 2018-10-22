import React, { Component } from 'react';
import UpNextHeader from './Components/UpNextHeader/UpNextHeader.js';
import NextVideoContainer from './Components/NextVideoContainer/NextVideoContainer.js';
import UpNextVideos from './Components/UpNextVideos/UpNextVideos.js';

import './UpNextColumn.css';

class UpNextColumn extends Component {
  render() {
    return (
      <div className="up-next-column">
        <UpNextHeader />
        <div className="first-next-wrapper">
          <NextVideoContainer />
        </div>
        <UpNextVideos />
      </div>
    );
  }
};

export default UpNextColumn;