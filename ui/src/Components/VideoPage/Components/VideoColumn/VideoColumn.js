import React, { Component } from 'react';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.js';
import VideoTitle from './Components/VideoTitle/VideoTitle.js';
import VideoViews from './Components/VideoViews/VideoViews.js';
import AuthorAvatar from './Components/AuthorAvatar/AuthorAvatar.js';
import AuthorDetails from './Components/AuthorDetails/AuthorDetails.js';
import AuthorSubscribe from './Components/AuthorSubscribe/AuthorSubscribe.js';
import RelatedLinks from './Components/RelatedLinks/RelatedLinks.js';
import CommentsCounter from './Components/CommentsCounter/CommentsCounter.js';
import UserAddComment from './Components/UserAddComment/UserAddComment.js';
import Comments from './Components/Comments/Comments'

import './VideoColumn.css';

class VideoColumn extends Component {
  render() {
    const { dbVideo } = this.props

    return (
      <div className="video-column">
        <section className="video-container">
          <VideoPlayer dbVideo={dbVideo}/>
          <VideoTitle dbVideo={dbVideo}/>
          <div className="video-social">
            <VideoViews />
            <div className="social-icons">
            </div>
          </div>
        </section>
        <section className="video-author">
          <div className="author-box">
            <AuthorAvatar dbVideo={dbVideo}/>
            <AuthorDetails dbVideo={dbVideo}/>
          </div>
          <AuthorSubscribe />
        </section>
        <RelatedLinks />
        <section className="comments-container">
          <div className="comments-header">
            <CommentsCounter />
            <div className="sort-by">SORT BY</div>
          </div>
          <UserAddComment />
          <Comments dbVideo={dbVideo}/>
        </section>
      </div>
    );
  }
};

export default VideoColumn;