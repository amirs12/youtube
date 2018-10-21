import React, { Component } from 'react';

import './VideoTitle.css';

class VideoTitle extends Component {
    render() {
      const { dbVideos } = this.props
      return (
        <p className="video-title">{dbVideos[0].videos[0].videoName}</p>
      );
    }
};

export default VideoTitle;