import React, { Component } from 'react';
import VideoViews from './Components/VideoViews/VideoViews.js';
import SocialIcons from './Components/SocialIcons/SocialIcons.js';

import './VideoSocial.css';

class VideoSocial extends Component {
    render() {
      return (
        <div className="video-social">
          <VideoViews />
          <SocialIcons />
        </div>
      );
    }
};

export default VideoSocial;