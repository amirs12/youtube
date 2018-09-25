import React, { Component } from 'react';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.js';
import VideoTitle from './Components/VideoTitle/VideoTitle.js';
import VideoSocial from './Components/VideoSocial/VideoSocial.js';

import './VideoContainer.css';

class VideoContainer extends Component {
    render() {
      return (
        <div className="video-container">
          <VideoPlayer />
          <VideoTitle />
          <VideoSocial />
        </div>
      );
    }
};

export default VideoContainer;