import React, { Component } from 'react'
import { connect } from 'react-redux'

import './NextVideoContainer.css';

class NextVideoContainer extends Component {
  render() {
    return (
      <div className="next-video-container">
        <img className="next-thumbnail-img" alt="commenter-avatar" src="https://i.ytimg.com/an_webp/0fAQhSRLQnM/mqdefault_6s.webp?du=3000&sqp=CKqPo94F&rs=AOn4CLCU_KXh9J_lqxDn5xA-YS0yeBYNiQ"></img>          
        <div className="next-info">
          <div className="next-name">Dire Straits - Sultans Of Swing</div>
          <div className="next-authour">Diablo4643</div>
          <div className="next-views">38M views</div>  
        </div>  
      </div>
    )
  }
}


export default NextVideoContainer