import React, { Component } from 'react';

import './CommenterAvatar.css';

class CommenterAvatar extends Component {
    render() {
      const { commenterAvatar } = this.props

      return (
        <img className="comments-user-avatar" alt="comments-user-avatar" src={commenterAvatar}/>
      );
    }
};

export default CommenterAvatar;