import React, { Component } from 'react';
import LikeCounter from './Components/LikeCounter/LikeCounter.js';
import CommentReply from './Components/CommentReply/CommentReply.js';

import './CommentLikes.css';

class CommentLikes extends Component {
  constructor() {
    super();
    this.state = {
      likevalue: 450
    }
    this.addlike = this.addlike.bind(this);
  }

  addlike() {
    this.setState({
      likevalue: this.state.likevalue + 1
    })
  }
  
  render() {
    //const { likeValue } = this.props
    return (
      <div className="comment-likes">
        <i onClick={this.addlike} className="fas fa-thumbs-up"></i>
        <LikeCounter value={this.state.likevalue}/>
        <i className="fas fa-thumbs-down"></i>
        <CommentReply />
      </div>
    );
  }
};

export default CommentLikes;