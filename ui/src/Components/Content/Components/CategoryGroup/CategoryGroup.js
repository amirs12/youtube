import React, { Component } from 'react'
import { connect } from 'react-redux'
import GroupVideo from './Components/GroupVideo/GroupVideo.js'
import { getVideoInfo } from '../../../../Actions/Actions.js'

import './CategoryGroup.css';

class CategoryGroup extends Component {
/*  componentDidMount() {
    //const videoId = 'GJm7H9IP5SU'
    this.props.getVideoInfo()
  }
*/
  render() {
    const { dbVideos , groupCategory , groupType } = this.props

    const videosGroup = dbVideos[0].videos.filter(videoObject => (videoObject.videoCategory === groupCategory))
    const mapVideos = videosGroup.map(videoItem => (
      <div key={videoItem.videoId} className="group-videos">
        <GroupVideo dbVideo={videoItem}/>
      </div>
    ))

    return (
      <div className="category-group">
        <div className="group-header">
          <p className="group-title">{groupCategory}</p>
          <p className="group-description">{groupType}</p>
        </div>
        <div className="group-videos">
          {mapVideos}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  videoInfo: state.videoInfoReducer.videoInfo,
  infoLoading: state.infoLoadingReducer.infoLoading
})

export default connect(mapStateToProps, { getVideoInfo })(CategoryGroup)