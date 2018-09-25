import React, { Component } from 'react';
import CommentsCounter from './Components/CommentsCounter/CommentsCounter.js';

import './CommentsHeader.css';

class CommentsHeader extends Component {
    render() {
      return (
        <div className="comments-header">
          <CommentsCounter />
          <div className="sort-by">SORT BY</div>
        </div>
      );
    }
};

export default CommentsHeader;