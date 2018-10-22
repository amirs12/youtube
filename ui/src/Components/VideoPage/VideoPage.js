import React, { Component } from 'react';
import { connect } from 'react-redux'
import VideoColumn from './Components/VideoColumn/VideoColumn'
import UpNextColumn from './Components/UpNextColumn/UpNextColumn.js';
import { fetchdb } from '../../Actions/Actions.js'

import './VideoPage.css';

class VideoPage extends Component {
  componentWillMount() {
    this.props.fetchdb()
  }
  
  render() {
    if(this.props.videosLoading === "true") {
      return <div>Loading...</div>
    }

    const video = this.props.dbVideos[0].videos[this.props.paramsId];
    if (!video) {
      return <div>Video not found</div>;
    }
    
    return (
      <div className="video-page">
        <VideoColumn dbVideo={video}/>
        <UpNextColumn dbVideos={this.props.dbVideos}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dbVideos: state.reducedb.dbVideos,
  videosLoading: state.loadingReducer.videosLoading
})

export default connect(mapStateToProps, { fetchdb })(VideoPage)