import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Components/Comment/Comment.js'
import { fetchComments , fetchUsers } from '../../../../../../Actions/Actions.js'

import './Comments.css'

class Comments extends Component {
  componentWillMount() {
    this.props.fetchComments()
    this.props.fetchUsers()
  }
  
  /*hibur(x, y) {
    return x + y
  }*/

  render() {
    const usersItems = this.props.users.map(userItem => (
        <div key={this.props.comments[userItem.id].id} className="comments">
          <Comment body={this.props.comments[userItem.id].body} 
//                   commenterName={this.props.dbVideos[2].videos[0].comments[0].commenterName} 
//                   name={this.props.dbVideos[2].videos[0].comments[0].commentDate}
          />
        </div>
    ))
    return (
      <div>
        {usersItems}
      </div>
    )
  } 
}

const mapStateToProps = state => ({
  comments: state.reduceComments.comments,
  users: state.reduceUsers.users,
 // dbVideos: state.reducedb.dbVideos,
 // videosLoading: state.loadingReducer.videosLoading
})

export default connect(mapStateToProps, { fetchComments , fetchUsers })(Comments)