import React, { Component } from 'react';
import CategoryGroup from './Components/CategoryGroup/CategoryGroup.js';

import './Content.css';

class Content extends Component {
    render() {
      return (
        <div className="content">
          <h1>This will be the content page</h1>
          <CategoryGroup />
        </div>
      );
    }
};

export default Content;