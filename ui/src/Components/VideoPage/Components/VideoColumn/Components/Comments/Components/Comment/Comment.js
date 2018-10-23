import React, { Component } from 'react';
import CommenterAvatar from './Components/CommenterAvatar/CommenterAvatar.js';
import CommenterDetails from './Components/CommenterDetails/CommenterDetails.js';

import './Comment.css'

class Comment extends Component {
  render() {
    const { body, commenterName, commentDate, commenterAvatar } = this.props

    return (
      <div className="comment">
        <CommenterAvatar commenterAvatar={commenterAvatar}/>
        <CommenterDetails body={body} commenterName={commenterName} commentDate={commentDate}/>
      </div>
    )
  } 
}

export default Comment