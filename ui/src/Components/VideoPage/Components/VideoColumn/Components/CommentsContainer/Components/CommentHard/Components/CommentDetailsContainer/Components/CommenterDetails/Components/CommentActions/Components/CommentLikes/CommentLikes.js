import React, { Component } from 'react';
import LikeCounter from './Components/LikeCounter/LikeCounter.js';
import CommentReply from './Components/CommentReply/CommentReply.js';

import './CommentLikes.css';

class CommentLikes extends Component {
    render() {
      return (
        <div className="comment-likes">
          <div className="comment-like-icon"></div>
          <LikeCounter />
          <div className="comment-unlike-icon"></div>
          <CommentReply />
        </div>
      );
    }
};

export default CommentLikes;