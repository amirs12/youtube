import React, { Component } from 'react'

import './GroupVideo.css'

class GroupVideo extends Component {
  render() {
    const { dbVideo } = this.props

    return (
      <div className="group-video">
        <img className="group-video-img" alt="group-video-img" src={dbVideo.thumbNail}></img>
        <p className="group-video-title">{dbVideo.videoName}</p>
        <p className="channel-name">{dbVideo.authorName}</p>
        <p className="views-and-date">{dbVideo.views}</p>
      </div>
    )
  }
}

export default GroupVideo