import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js';
//import Sidebar from './Components/Sidebar/Sidebar.js';
import VideoPage from './Components/VideoPage/VideoPage.js';
import { 
  BrowserRouter as Router,
  Route,
  Link
 } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Link to="/">VideoPage</Link>
          <Link to="/content">Content</Link>

          <Route exact path="/" component={VideoPage} />
          <Route path="/content" component={Content} />
        </div>
      </Router>
    );
  }
};


export default App;
