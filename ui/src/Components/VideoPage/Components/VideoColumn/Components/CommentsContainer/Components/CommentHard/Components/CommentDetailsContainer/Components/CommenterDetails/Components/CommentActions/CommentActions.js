import React, { Component } from 'react';
import CommentLikes from './Components/CommentLikes/CommentLikes.js';

import './CommentActions.css';

class CommentActions extends Component {
    render() {
      return (
        <div className="comment-actions">
          <CommentLikes />
        </div>
      );
    }
};

export default CommentActions;