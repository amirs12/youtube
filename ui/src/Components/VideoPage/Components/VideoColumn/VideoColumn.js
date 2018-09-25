import React, { Component } from 'react';
import VideoContainer from './Components/VideoContainer/VideoContainer.js';
import VideoAuthor from './Components/VideoAuthor/VideoAuthor.js';
import RelatedLinks from './Components/RelatedLinks/RelatedLinks.js';
import CommentsContainer from './Components/CommentsContainer/CommentsContainer.js';

import './VideoColumn.css';

class VideoColumn extends Component {
    render() {
      return (
        <div className="video-column">
          <VideoContainer />
          <VideoAuthor />
          <RelatedLinks />
          <CommentsContainer />
        </div>
      );
    }
};

export default VideoColumn;