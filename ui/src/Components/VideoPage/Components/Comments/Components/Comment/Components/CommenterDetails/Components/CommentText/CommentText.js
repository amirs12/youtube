import React, { Component } from 'react';

import './CommentText.css';

class CommentText extends Component {
  render() {
    const { body } = this.props
    return (
      <div className="comment-text">
        {body}
      </div>
    );
  }
};

export default CommentText
/*
const mapStateToProps = state => {
  comment = this.reduceComments
}

export default connect()(CommentText);
*/