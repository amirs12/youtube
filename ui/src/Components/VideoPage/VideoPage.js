import React, { Component } from 'react';
import VideoColumn from './Components/VideoColumn/VideoColumn.js';
import UpNextColumn from './Components/UpNextColumn/UpNextColumn.js';

import './VideoPage.css';

class VideoPage extends Component {
    render() {
      return (
        <div className="video-page">
          <VideoColumn />
          <UpNextColumn />
        </div>
      );
    }
};

export default VideoPage;