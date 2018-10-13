import { combineReducers } from 'redux'
import {
  ADD_LIKE,
  ADD_DISLIKE,
  FETCH_COMMENTS,
  FETCH_USERS
} from '../Actions/Actions.js'

const initialState = {
  videos: [],
  like: 500,
  dislike: 10,
  comments: [],
  newcomment: {},
  users: []
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
  reduceUsers
})

export default rootReducer