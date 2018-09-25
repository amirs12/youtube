import React, { Component } from 'react';
import AuthorAvatar from './Components/AuthorAvatar/AuthorAvatar.js';
import AuthorDetails from './Components/AuthorDetails/AuthorDetails.js';

import './AuthorBox.css';

class AuthorBox extends Component {
    render() {
      return (
        <div className="author-box">
          <AuthorAvatar />
          <AuthorDetails />
        </div>
      );
    }
};

export default AuthorBox;