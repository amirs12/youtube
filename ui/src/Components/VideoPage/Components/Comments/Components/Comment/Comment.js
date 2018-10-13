import React, { Component } from 'react';
import CommenterAvatar from './Components/CommenterAvatar/CommenterAvatar.js';
import CommenterDetails from './Components/CommenterDetails/CommenterDetails.js';

import './Comment.css'

class Comment extends Component {
  render() {
    const { body, user } = this.props

    return (
      <div className="comment">
        <CommenterAvatar />
        <CommenterDetails body={body} user={user.name}/>
      </div>
    )
  } 
}

export default Comment