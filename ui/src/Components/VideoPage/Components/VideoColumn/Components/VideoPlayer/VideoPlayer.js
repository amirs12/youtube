import React, { Component } from 'react';

import './VideoPlayer.css';

class VideoPlayer extends Component {
    render() {
      const { dbVideo } = this.props

      return (
        <div className="video-player">
          <iframe className="video-narcos" title="Tuyo" width="640" height="360" src={dbVideo.videoLink} frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      );
    }
};

export default VideoPlayer;