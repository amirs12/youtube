import React, { Component } from 'react';
import CommenterAvatar from './Components/CommenterAvatar/CommenterAvatar.js';
import CommentDetailsContainer from './Components/CommentDetailsContainer/CommentDetailsContainer.js';

import './CommentHard.css';

class CommentHard extends Component {
    render() {
      return (
        <div className="comment-hard">
          <CommenterAvatar />
          <CommentDetailsContainer/>
        </div>
      );
    }
};

export default CommentHard;