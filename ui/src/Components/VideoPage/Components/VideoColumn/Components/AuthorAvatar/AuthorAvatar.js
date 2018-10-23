import React, { Component } from 'react';

import './AuthorAvatar.css';

class AuthorAvatar extends Component {
    render() {
      const { dbVideo } = this.props

      return (
        <div className="author-avatar">
          <img className="author-img" alt="Movie Music Club" src={dbVideo.authorAvatar}/>
        </div>
      );
    }
};

export default AuthorAvatar;