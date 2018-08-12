import React, { Component } from 'react';
import Header from './feature/Header/Header.js';
import Content from './feature/Content/Content.js';
import Sidebar from './feature/Sidebar/Sidebar.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Sidebar />
      </div>
    );
  }
};

export default App;
