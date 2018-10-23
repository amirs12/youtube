import React, { Component } from 'react';

import './CommentDate.css';

class CommentDate extends Component {
    render() {
      const { commentDate } = this.props

      return (
        <div className="comment-date">{commentDate} months ago</div>
      );
    }
};

export default CommentDate;