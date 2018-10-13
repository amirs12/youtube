import React, { Component } from 'react';
import CommenterName from './Components/CommenterName/CommenterName.js';
import CommentDate from './Components/CommentDate/CommentDate.js';
import CommentText from './Components/CommentText/CommentText.js';
import CommentLikes from './Components/CommentLikes/CommentLikes.js';
import ViewReplies from './Components/ViewReplies/ViewReplies.js';

import './CommenterDetails.css';

class CommenterDetails extends Component {
  render() {
    const { body, user } = this.props

    return (
      <div className="commenter-details">
        <div className="commenter-header">
          <CommenterName user={user}/>
          <CommentDate />
        </div>
          <CommentText body={body}/>
        <div className="comment-actions">
          <CommentLikes />
        </div>
        <ViewReplies />
      </div>
    );
  }
};

export default CommenterDetails;