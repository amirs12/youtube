import React, { Component } from 'react';
import UpNextHeader from './Components/UpNextHeader/UpNextHeader.js';

import './UpNextColumn.css';

class UpNextColumn extends Component {
    render() {
      return (
        <div className="up-next-column">
          <UpNextHeader />
        </div>
      );
    }
};

export default UpNextColumn;