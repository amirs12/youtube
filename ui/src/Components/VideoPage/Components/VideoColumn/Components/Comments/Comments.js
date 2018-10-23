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
 
  render() {
    if(this.props.commentsLoading === "true" || this.props.usersLoading === "true") {
      return <div>Loading...</div>
    }

    const usersItems = this.props.users.map(userItem => (
        <div key={this.props.comments[userItem.id].id} className="comments">
          <Comment body={this.props.comments[userItem.id].body} 
                   commenterName={userItem.name} 
                   commentDate={userItem.id}
                   commenterAvatar={this.props.dbVideos[0].avatars[userItem.id]}
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
  dbVideos: state.reducedb.dbVideos,
  usersLoading: state.usersReducer.usersLoading,
  commentsLoading: state.commentsReducer.commentsLoading
})

export default connect(mapStateToProps, { fetchComments , fetchUsers })(Comments)