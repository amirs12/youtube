import React, { Component } from 'react';
import Menu from './Components/Menu/Menu.js';
import HomeLogo from './Components/HomeLogo/HomeLogo.js';
import Search from './Components/Search/Search.js';
import HeaderButtons from './Components/HeaderButtons/HeaderButtons.js';

import './Header.css';

class Header extends Component {
    render() {
      return (
        <div className="header">
          <div className="menu-container">
            <Menu />
            <HomeLogo />
          </div>
          <Search />
          <HeaderButtons />
        </div>
      );
    }
};

export default Header;

