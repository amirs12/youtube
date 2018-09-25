import React, { Component } from 'react';
import CommentsAvatar from './Components/CommentsAvatar/CommentsAvatar.js';

import './AddComment.css';

class AddComment extends Component {
    render() {
      return (
        <div className="add-comment">
          <CommentsAvatar />
        </div>
      );
    }
};

export default AddComment;