import React, { Component } from 'react';

import './LikeCounter.css';

class LikeCounter extends Component {
  render() {
    const { value } = this.props
    return (
      <div className="like-counter">
        {value}
      </div>
    );
  }
};

export default LikeCounter;