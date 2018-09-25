import React, { Component } from 'react';
import CommenterName from './Components/CommenterName/CommenterName.js';
import CommentDate from './Components/CommentDate/CommentDate.js';

import './CommenterHeader.css';

class CommenterHeader extends Component {
    render() {
      return (
        <div className="commenter-header">
          <CommenterName />
          <CommentDate />
        </div>
      );
    }
};

export default CommenterHeader;