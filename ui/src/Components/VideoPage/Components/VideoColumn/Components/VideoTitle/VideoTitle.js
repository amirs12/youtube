import React, { Component } from 'react';

import './VideoTitle.css';

class VideoTitle extends Component {
    render() {
      const { dbVideo } = this.props
      return (
        <p className="video-title">{dbVideo.videoName}</p>
      );
    }
};

export default VideoTitle;