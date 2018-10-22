import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './SidebarOptions.css'

class SidebarOptions extends Component {
    render() {
      return (
        <div className="sidebar-options">
          <div className="sidebar-home-box">
            <Link to="/">
              <i className="fas fa-home"></i>
            </Link>
            <div className="sidebar-home">Home</div>
          </div>
          <div className="sidebar-trending-box">
            <i class="fas fa-fire"></i>
            <div className="sidebar-trending">Trending</div>
          </div>
          <div className="sidebar-subscript-box">
            <i class="fab fa-youtube"></i>
            <div className="sidebar-subscript">Subscriptions</div>
          </div>  
        </div>
      );
    }
};

export default SidebarOptions;