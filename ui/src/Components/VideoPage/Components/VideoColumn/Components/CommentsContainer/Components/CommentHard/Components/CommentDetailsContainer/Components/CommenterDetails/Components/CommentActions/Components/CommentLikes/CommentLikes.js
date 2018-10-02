import React, { Component } from 'react';
import LikeCounter from './Components/LikeCounter/LikeCounter.js';
import CommentReply from './Components/CommentReply/CommentReply.js';

import './CommentLikes.css';

class CommentLikes extends Component {
    render() {
      return (
        <div className="comment-likes">
          <i class="fas fa-thumbs-up"></i>
          <LikeCounter />
          <i class="fas fa-thumbs-down"></i>
          <CommentReply />
        </div>
      );
    }
};

export default CommentLikes;