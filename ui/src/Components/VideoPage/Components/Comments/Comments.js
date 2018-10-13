import React, { Component } from 'react';
import { connect } from 'react-redux'
import Comment from './Components/Comment/Comment.js';
import { fetchComments , fetchUsers } from '../../../../Actions/Actions.js'

import './Comments.css'

class Comments extends Component {
  componentWillMount() {
    this.props.fetchComments()
    this.props.fetchUsers()
  }

  render() {
    const usersItems = this.props.users.map(user => (
      this.props.comments.map(comment => (
        <div key={comment.id} className="comments">
          <Comment body={comment.body} user={user}/>
        </div>
      ))
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
  users: state.reduceUsers.users
})

export default connect(mapStateToProps, { fetchComments , fetchUsers })(Comments)