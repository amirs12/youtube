import React, { Component } from 'react';

import './CommenterName.css';

class CommenterName extends Component {
    render() {
      const { user } = this.props

      return (
        <div className="commenter-name">{user}</div>
      );
    }
};

export default CommenterName;