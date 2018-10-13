import React, { Component } from 'react';

import './AuthorAvatar.css';

class AuthorAvatar extends Component {
    render() {
      return (
        <div className="author-avatar">
          <img className="author-img" alt="Movie Music Club" src="https://yt3.ggpht.com/-jFOQVOn4cAM/AAAAAAAAAAI/AAAAAAAAAAA/tzf9uBj-Txg/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg"/>
        </div>
      );
    }
};

export default AuthorAvatar;