import React, { Component } from 'react';
import { connect } from 'react-redux'
import LikeCounter from './Components/LikeCounter/LikeCounter.js';
import CommentReply from './Components/CommentReply/CommentReply.js';
import { addDisLike, addALike } from '../../../../../../../../../../../../Actions/Actions.js'

import './CommentLikes.css';

class CommentLikes extends Component {
  render() {
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
  like: state.addLike.like
})

export default connect(mapStateToProps, { addDisLike, addALike })(CommentLikes);