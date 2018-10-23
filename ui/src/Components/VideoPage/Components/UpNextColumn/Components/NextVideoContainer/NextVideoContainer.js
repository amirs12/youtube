import React, { Component } from 'react'
import { connect } from 'react-redux'

import './NextVideoContainer.css';

class NextVideoContainer extends Component {
  render() {
    const { dbVideos, thumbId } = this.props

    if(this.props.videosLoading === "true") {
      return <div>Loading...</div>
    }

    return (
      <div className="next-video-container">
        <img className="next-thumbnail-img" alt="commenter-avatar" src={dbVideos[0].videos[thumbId].thumbNail}></img>          
        <div className="next-info">
          <div className="next-name">{dbVideos[0].videos[thumbId].videoName}</div>
          <div className="next-authour">{dbVideos[0].videos[thumbId].authorName}</div>
          <div className="next-views">{dbVideos[0].videos[thumbId].views}</div>  
        </div>  
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dbVideos: state.reducedb.dbVideos,
  videosLoading: state.loadingReducer.videosLoading
})

export default connect(mapStateToProps, {})(NextVideoContainer)