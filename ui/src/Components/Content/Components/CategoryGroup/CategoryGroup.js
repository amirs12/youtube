import React, { Component } from 'react';
import GroupHeader from './Components/GroupHeader/GroupHeader.js';

import './CategoryGroup.css';

class CategoryGroup extends Component {
    render() {
      return (
        <div className="category-group">
            <GroupHeader />
        </div>
      );
    }
};

export default CategoryGroup;