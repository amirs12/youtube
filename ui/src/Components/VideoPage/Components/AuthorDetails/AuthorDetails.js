import React, { Component } from 'react';

import './AuthorDetails.css';

class AuthorDetails extends Component {
    render() {
      return (
        <div className="author-details">
          <p className="author-name">Movie Music Club</p>
          <p className="published">Published on Dec 1, 2017</p>
        </div>
      );
    }
};

export default AuthorDetails;