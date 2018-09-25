import React, { Component } from 'react';
import CommenterDetails from './Components/CommenterDetails/CommenterDetails.js';

import './CommentDetailsContainer.css';

class CommentDetailsContainer extends Component {
    render() {
      return (
        <div className="comment-details-container">
          <CommenterDetails />
        </div>
      );
    }
};

export default CommentDetailsContainer;