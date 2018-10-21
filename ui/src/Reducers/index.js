import { combineReducers } from 'redux'
import {
  ADD_LIKE,
  ADD_DISLIKE,
  FETCH_COMMENTS,
  FETCH_USERS,
  GET_VIDEOS_RESPONSE,
  GET_VIDEOS_REQUEST,
  VIDEO_INFO_REQUEST,
  VIDEO_INFO_RESPONSE
} from '../Actions/Actions.js'

const initialState = {
  videos: [],
  videosLoading: "true",
  like: 500,
  dislike: 10,
  comments: [],
  newcomment: {},
  users: [],
  dbVideos: [],
  categories: [],
  videoInfo: {},
  infoLoading: "false"
}

function videoInfoReducer(state = initialState, action) {
  switch (action.type) {
    case VIDEO_INFO_RESPONSE:
      return {...state, videoInfo: action.videoInfo}
    default:
      return state
  }
}

function infoLoadingReducer(state = initialState, action) {
  switch (action.type) {
    case VIDEO_INFO_REQUEST:
      return {...state, infoLoading: "true"}
    case GET_VIDEOS_RESPONSE:
      return {...state, infoLoading: "false"}
    default:
      return state
  }
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

function reduceComments(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {...state, comments: action.comments}
    default:
      return state
  }
}

function addLike(state = initialState, action) {
  switch (action.type) {
    case ADD_LIKE:
      return {...state, like: state.like + 1}
    case ADD_DISLIKE:
      return {...state, dislike: state.dislike + 1}
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
  videoInfoReducer,
  infoLoadingReducer
})

export default rootReducer