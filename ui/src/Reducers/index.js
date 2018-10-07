import { combineReducers } from 'redux'
import {
  ADD_LIKE,
  ADD_DISLIKE
} from '../Actions/Actions.js'

export function addLike(state = 45000, action) {
  switch (action.type) {
    case ADD_LIKE:
      return state + 1
    default:
      return state
  }  
}

export function addUnlike(state = 0, action) {
  switch (action.type) {
    case ADD_DISLIKE:
      return state + 1
    default:
      return state
  }  
}

/*
function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}
*/
const rootReducer = combineReducers({
  ADD_DISLIKE,
  ADD_LIKE
})

export default rootReducer