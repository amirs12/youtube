import React, { Component } from 'react';
import CategoryGroup from './Components/CategoryGroup/CategoryGroup.js';

import './Content.css';

class Content extends Component {
    render() {
      return (
        <div className="content">
          <CategoryGroup />
        </div>
      );
    }
};

export default Content;