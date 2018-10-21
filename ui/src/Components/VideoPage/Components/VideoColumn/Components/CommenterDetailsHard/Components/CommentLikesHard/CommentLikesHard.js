import React, { Component } from 'react';
import { connect } from 'react-redux'
import LikeCounterHard from './Components/LikeCounterHard/LikeCounterHard.js';
import CommentReplyHard from './Components/CommentReplyHard/CommentReplyHard.js';
import { addDisLike, addALike } from '../../../../../../../../Actions/Actions.js'

import './CommentLikesHard.css';

class CommentLikesHard extends Component {
  render() {
    return (
      <div className="comment-likes-hard">
        <i onClick={this.props.addALike} className="fas fa-thumbs-up"></i>
        <LikeCounterHard value={this.props.like}/>
        <i onClick={this.props.addDisLike} className="fas fa-thumbs-down"></i>
        <LikeCounterHard value={this.props.dislike}/>
        <CommentReplyHard />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dislike: state.addLike.dislike,
  like: state.addLike.like
})

export default connect(mapStateToProps, { addDisLike, addALike })(CommentLikesHard);