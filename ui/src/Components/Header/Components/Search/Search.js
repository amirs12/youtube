import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() {
      return (
        <div className="search">
          <form className="header-search-form">
            <input className="header-search-input" placeholder="Search"></input>
            <div className="search-icon-box">
              <i class="fas fa-search"></i>
            </div>
          </form>
        </div>
      );
    }
};

export default Search;