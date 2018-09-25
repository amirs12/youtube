import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js';
import Sidebar from './Components/Sidebar/Sidebar.js';
import VideoPage from './Components/VideoPage/VideoPage.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Sidebar />
        <VideoPage />
      </div>
    );
  }
};


export default App;
