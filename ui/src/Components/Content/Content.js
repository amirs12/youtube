import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoryGroup from './Components/CategoryGroup/CategoryGroup.js';
import Sidebar from '../Sidebar/Sidebar.js';
import { fetchdb } from '../../Actions/Actions.js'

import './Content.css';

class Content extends Component {
  componentWillMount() {
    this.props.fetchdb()
  }

  render() {
    if(this.props.videosLoading === "true") {
      return <div>Loading...</div>
    }

    return (
      <div className="content">
        <Sidebar />
        <div className="groups-container">
          <div>
            <CategoryGroup dbVideos={this.props.dbVideos} groupCategory="YouTube Mixes" groupType="Nonstop playlists based on a song or artist"/>
            <CategoryGroup dbVideos={this.props.dbVideos} groupCategory="Recomended" groupType=""/>
            <CategoryGroup dbVideos={this.props.dbVideos} groupCategory="Rock Music - Topic" groupType="Recomended videos for you"/>
            <CategoryGroup dbVideos={this.props.dbVideos} groupCategory="90's Rock - Topic" groupType="Recomended videos for you"/>
            <CategoryGroup dbVideos={this.props.dbVideos} groupCategory="Mixmag" groupType="Recomended channel for you"/>
         </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  dbVideos: state.reducedb.dbVideos,
  videosLoading: state.loadingReducer.videosLoading
})

export default connect(mapStateToProps, { fetchdb })(Content)