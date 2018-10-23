import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js';
import VideoPage from './Components/VideoPage/VideoPage.js';
import { 
  BrowserRouter as Router,
  Route
 } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />

          <Route exact path="/" component={Content} />
          <Route path="/video/:id" component={Child} />
        </div>
      </Router>
    );
  }
};

const Child = ({ match }) => (
  <div>
    <VideoPage paramsId={match.params.id}/>
  </div>
);


export default App;
