import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import NextVideoContainer from '../NextVideoContainer/NextVideoContainer.js'

import './UpNextVideos.css'

class UpNextVideos extends Component {
  render() {
    const { dbVideos , thumbId, nextId } = this.props

    const nextVideos = dbVideos[0].videos.filter(videoObject => 
      (videoObject.videoId !== thumbId && videoObject.videoId !== nextId))
    const mapNexts = nextVideos.map(videoItem => (
      <div key={videoItem.videoId} className="group-videos">
        <Link to={`/video/${videoItem.videoId}`} className="next-videos">
          <NextVideoContainer thumbId={videoItem.videoId}/>
        </Link>     
      </div>
    ))
    
    return (
      <div>
        {mapNexts}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dbVideos: state.reducedb.dbVideos,
})

export default connect(mapStateToProps, {})(UpNextVideos)