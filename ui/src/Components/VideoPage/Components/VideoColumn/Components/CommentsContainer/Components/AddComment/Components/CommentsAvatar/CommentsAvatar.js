import React, { Component } from 'react';

import './CommentsAvatar.css';

class CommentsAvatar extends Component {
    render() {
      return (
        <div className="comments-avatar">
          <img className="user-comments-avatar" alt="user-comments-avatar" src="https://yt3.ggpht.com/-PL6cJ2EVTog/AAAAAAAAAAI/AAAAAAAAAAA/IE2WM5N1c6A/s48-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
          <input className="user-add-comment" placeholder="Add a public comment..."/>
        </div>
      );
    }
};

export default CommentsAvatar;