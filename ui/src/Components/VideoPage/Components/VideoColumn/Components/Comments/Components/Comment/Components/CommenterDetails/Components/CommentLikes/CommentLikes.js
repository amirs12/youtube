import React, { Component } from 'react';
import { connect } from 'react-redux'
import LikeCounter from './Components/LikeCounter/LikeCounter.js';
import CommentReply from './Components/CommentReply/CommentReply.js';
import { addDisLike, addALike } from '../../../../../../../../../../../../Actions/Actions.js'

import './CommentLikes.css';

class CommentLikes extends Component {
  render() {
    const { commentId } = this.props
    if(this.props.dislikeFlag || this.props.likeFlag) {
      return (
        <div className="comment-likes">
          <i className="fas fa-thumbs-up"></i>
          <LikeCounter value={this.props.like}/>
          <i className="fas fa-thumbs-down"></i>
          <LikeCounter value={this.props.dislike}/>
          <CommentReply />
        </div>
      )
    }

    return (
      <div className="comment-likes">
        <i onClick={this.props.addALike} className="fas fa-thumbs-up"></i>
        <LikeCounter value={this.props.like}/>
        <i onClick={this.props.addDisLike} className="fas fa-thumbs-down"></i>
        <LikeCounter value={this.props.dislike}/>
        <CommentReply />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dislike: state.addLike.dislike,
  like: state.addLike.like,
  dislikeFlag: state.addLike.dislikeFlag,
  likeFlag: state.addLike.likeFlag
})

export default connect(mapStateToProps, { addDisLike, addALike })(CommentLikes);