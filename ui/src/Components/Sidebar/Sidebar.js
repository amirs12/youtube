import React, { Component } from 'react';
import SidebarOptions from './Components/SidebarOptions/SidebarOptions.js';
import Library from './Components/Library/Library.js';
import Subscriptions from './Components/Subscriptions/Subscriptions.js';
import MoreYoutube from './Components/MoreYoutube/MoreYoutube.js';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarOptions />
        <Library />
        <Subscriptions />
        <MoreYoutube />
      </div>
    );
  }
};

export default Sidebar;