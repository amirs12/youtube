import React, { Component } from 'react';

import './VideoPlayer.css';

class VideoPlayer extends Component {
    render() {
      return (
        <div className="video-player">
          <iframe title="Rodrigo Amarante - Tuyo" width="640" height="360" src="https://www.youtube.com/embed/GJm7H9IP5SU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      );
    }
};

export default VideoPlayer;