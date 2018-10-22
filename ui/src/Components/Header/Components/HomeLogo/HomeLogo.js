import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './HomeLogo.css'

class HomeLogo extends Component {
  render() {
    return (
      <div className="home-logo">
        <Link to="/">
          <img className="home-logo-pic" alt="home-logo-pic" src="https://cdn-st2.rtr-vesti.ru/vh/pictures/hdr/139/692/5.jpg"/>
        </Link>
      </div>
    );
  }
};

export default HomeLogo;

