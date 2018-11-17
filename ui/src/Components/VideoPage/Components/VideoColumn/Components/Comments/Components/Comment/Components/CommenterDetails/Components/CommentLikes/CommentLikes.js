import React, { Component } from 'react';
import LikeCounter from './Components/LikeCounter/LikeCounter.js';
import CommentReply from './Components/CommentReply/CommentReply.js';

import './CommentLikes.css';

class CommentLikes extends Component {
  constructor(props) {
    super(props)
    const { commentId } = this.props
    this.state = {likes: commentId * 179, dislikes: commentId * 13, clickFlag: false}
  }

  incrementLikes = () => {
		this.setState(
            { likes: this.state.likes + 1, clickFlag: true }
        );
	};

  incrementDislikes = () => {
		this.setState(
            { dislikes: this.state.dislikes + 1, clickFlag: true }
        );
  };
  
  render() {
    if(this.state.clickFlag) {
      return (
        <div className="comment-likes">
          <i className="fas fa-thumbs-up"></i>
          <LikeCounter value={this.state.likes}/>
          <i className="fas fa-thumbs-down"></i>
          <LikeCounter value={this.state.dislikes}/>
          <CommentReply />
        </div>
      )
    }

    return (
      <div className="comment-likes">
        <i onClick={this.incrementLikes} className="fas fa-thumbs-up"></i>
        <LikeCounter value={this.state.likes}/>
        <i onClick={this.incrementDislikes} className="fas fa-thumbs-down"></i>
        <LikeCounter value={this.state.dislikes}/>
        <CommentReply />
      </div>
    );
  }
}

export default CommentLikes