import React, { Component } from 'react';
import AuthorBox from './Components/AuthorBox/AuthorBox.js';
import AuthorSubscribe from './Components/AuthorSubscribe/AuthorSubscribe.js';

import './VideoAuthor.css';

class VideoAuthor extends Component {
    render() {
      return (
        <div className="video-author">
          <AuthorBox />
          <AuthorSubscribe />
        </div>
      );
    }
};

export default VideoAuthor;