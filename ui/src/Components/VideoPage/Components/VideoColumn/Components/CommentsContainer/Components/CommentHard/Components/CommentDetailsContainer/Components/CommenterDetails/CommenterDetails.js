import React, { Component } from 'react';
import CommenterHeader from './Components/CommenterHeader/CommenterHeader.js';
import CommentText from './Components/CommentText/CommentText.js';
import CommentActions from './Components/CommentActions/CommentActions.js';
import ViewReplies from './Components/ViewReplies/ViewReplies.js';

import './CommenterDetails.css';

class CommenterDetails extends Component {
    render() {
      return (
        <div className="commenter-details">
          <CommenterHeader />
          <CommentText />
          <CommentActions />
          <ViewReplies />
        </div>
      );
    }
};

export default CommenterDetails;