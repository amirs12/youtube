import React, { Component } from 'react';
import CommentsHeader from './Components/CommentsHeader/CommentsHeader.js';
import AddComment from './Components/AddComment/AddComment.js';
import CommentHard from './Components/CommentHard/CommentHard.js';

import './CommentsContainer.css';

class CommentsContainer extends Component {
    render() {
      return (
        <div className="comments-container">
          <CommentsHeader />
          <AddComment />
          <CommentHard />
        </div>
      );
    }
};

export default CommentsContainer;