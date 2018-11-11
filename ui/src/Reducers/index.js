import { combineReducers } from 'redux'
import {
  ADD_LIKE,
  ADD_DISLIKE,
  FETCH_COMMENTS,
  FETCH_USERS,
  GET_VIDEOS_RESPONSE,
  GET_VIDEOS_REQUEST,
  REQUEST_COMMENTS,
  REQUEST_USERS
} from '../Actions/Actions.js'

const initialState = {
  videos: [],
  videosLoading: "true",
  commentId: {}, 
  like: 500,
  likeFlag: false,
  dislike: 10,
  dislikeFlag: false,
  comments: [],
  users: [],
  dbVideos: [],
  usersLoading: "true",
  commentsLoading: "true"
}

function reducedb(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS_RESPONSE:
      return {...state, dbVideos: action.dbVideos}
    default:
      return state
  }
}

function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS_REQUEST:
      return {...state, videosLoading: "true"}
    case GET_VIDEOS_RESPONSE:
      return {...state, videosLoading: "false"}
    default:
      return state
  }
}

function reduceUsers(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {...state, users: action.users}
    default:
      return state
  }
}

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USERS:
      return {...state, usersLoading: "true"}
    case FETCH_USERS:
      return {...state, usersLoading: "false"}
    default:
      return state
  }
}

function reduceComments(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {...state, comments: action.comments}
    default:
      return state
  }
}

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return {...state, commentsLoading: "true"}
    case FETCH_COMMENTS:
      return {...state, commentsLoading: "false"}
    default:
      return state
  }
}

function addLike(state = initialState, action) {
  switch (action.type) {
    case ADD_LIKE:
      return {...state, commentId: action.commentId, like: state.like + 1, likeFlag: "true"}
    case ADD_DISLIKE:
      return {...state, commentId: action.commentId, dislike: state.dislike + 1, dislikeFlag: "true"}
    default:
      return state
  }  
}

const rootReducer = combineReducers({
  reduceComments, 
  addLike,
  reduceUsers,
  reducedb,
  loadingReducer,
  commentsReducer,
  usersReducer
})

export default rootReducer