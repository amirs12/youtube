import React, { Component } from 'react';

import './LikeCounterHard.css';

class LikeCounterHard extends Component {
  render() {
    const { value } = this.props
    return (
      <div className="like-counter-hard">
        {value}
      </div>
    );
  }
};

export default LikeCounterHard;