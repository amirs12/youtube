import React, { Component } from 'react';

import './UserAddComment.css';

class UserAddComment extends Component {
    render() {
      return (
        <form className="user-add-comment">
          <img className="user-comments-avatar" alt="user-comments-avatar" src="https://yt3.ggpht.com/-9fPkv0S6GBY/AAAAAAAAAAI/AAAAAAAAAAA/_eiF_ifrxqU/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
          <input className="add-comment-box" placeholder="Add a public comment..."/>
        </form>
      );
    }
};

export default UserAddComment;