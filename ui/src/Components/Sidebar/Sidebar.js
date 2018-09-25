import React, { Component } from 'react';
import SidebarOptions from './Components/SidebarOptions/SidebarOptions.js';
import Library from './Components/Library/Library.js';
import About from './Components/About/About.js';

import './Sidebar.css';

class Sidebar extends Component {
    render() {
      return (
        <div className="sidebar">
          <SidebarOptions />
          <Library />
          <About />
        </div>
      );
    }
};

export default Sidebar;