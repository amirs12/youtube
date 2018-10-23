import React, { Component } from 'react';

import './AuthorDetails.css';

class AuthorDetails extends Component {
    render() {
      const { dbVideo } = this.props

      return (
        <div className="author-details">
          <p className="author-name">{dbVideo.authorName}</p>
          <p className="published">{dbVideo.published}</p>
        </div>
      );
    }
};

export default AuthorDetails;