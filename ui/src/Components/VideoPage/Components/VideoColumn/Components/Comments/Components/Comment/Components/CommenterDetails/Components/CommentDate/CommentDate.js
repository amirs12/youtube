import React, { Component } from 'react';

import './CommentDate.css';

class CommentDate extends Component {
    render() {
      const { name } = this.props

      return (
        <div className="comment-date">{name}</div>
      );
    }
};

export default CommentDate;