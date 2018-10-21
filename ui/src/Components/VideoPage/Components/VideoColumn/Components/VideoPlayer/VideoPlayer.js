import React, { Component } from 'react';

import './VideoPlayer.css';

class VideoPlayer extends Component {
    render() {
      const { dbVideos } = this.props

      return (
        <div className="video-player">
          <iframe className="video-narcos" title="Tuyo" width="640" height="360" src={dbVideos[0].videos[0].videoLink} frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      );
    }
};

export default VideoPlayer;