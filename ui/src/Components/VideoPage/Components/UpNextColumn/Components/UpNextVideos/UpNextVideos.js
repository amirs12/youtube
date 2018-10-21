import React, { Component } from 'react'
import NextVideoContainer from '../NextVideoContainer/NextVideoContainer.js'

import './UpNextVideos.css'

class UpNextVideos extends Component {
  render() {
    return (
      <div>
        <NextVideoContainer />
        <NextVideoContainer />
        <NextVideoContainer />
        <NextVideoContainer />
        <NextVideoContainer />
      </div>
    )
  }
}

export default UpNextVideos