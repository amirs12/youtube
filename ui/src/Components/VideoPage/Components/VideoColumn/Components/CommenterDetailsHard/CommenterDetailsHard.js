import React, { Component } from 'react';
import CommenterNameHard from './Components/CommenterNameHard/CommenterNameHard.js';
import CommentDateHard from './Components/CommentDateHard/CommentDateHard.js';
import CommentTextHard from './Components/CommentTextHard/CommentTextHard.js';
import CommentLikesHard from './Components/CommentLikesHard/CommentLikesHard.js';
import ViewRepliesHard from './Components/ViewRepliesHard/ViewRepliesHard.js';

import './CommenterDetailsHard.css';

class CommenterDetailsHard extends Component {
    render() {
      return (
        <div className="commenter-details-hard">
          <div className="commenter-header-hard">
            <CommenterNameHard />
            <CommentDateHard />
          </div>
          <CommentTextHard />
          <div className="comment-actions-hard">
            <CommentLikesHard />
          </div>
          <ViewRepliesHard />
        </div>
      );
    }
};

export default CommenterDetailsHard;