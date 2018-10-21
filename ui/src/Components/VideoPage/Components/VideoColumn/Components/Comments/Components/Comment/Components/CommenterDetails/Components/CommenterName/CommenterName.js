import React, { Component } from 'react';

import './CommenterName.css';

class CommenterName extends Component {
    render() {
      const { commenterName } = this.props

      return (
        <div className="commenter-name">{commenterName}</div>
      );
    }
};

export default CommenterName;