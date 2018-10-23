export const ADD_LIKE = 'ADD_LIKE'
export const ADD_DISLIKE = 'ADD_DISLIKE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const FETCH_USERS = 'FETCH_USERS'
export const GET_VIDEOS_REQUEST = 'GET_VIDEOS_REQUEST'
export const GET_VIDEOS_RESPONSE = 'GET_VIDEOS_RESPONSE'
export const VIDEO_INFO_REQUEST = 'VIDEO_INFO_REQUEST'
export const VIDEO_INFO_RESPONSE = 'VIDEO_INFO_RESPONSE'
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const REQUEST_USERS = 'REQUEST_USERS'

export const addDisLike = () => dispatch => {
  dispatch({
    type: ADD_DISLIKE
  })
}

export const addALike = () => dispatch => {
  dispatch({
    type: ADD_LIKE
  })
}

export const fetchComments = () => dispatch => {
  dispatch({type: REQUEST_COMMENTS})
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(comments => 
      dispatch({
        type: FETCH_COMMENTS,
        comments
      })
    )
}

export const fetchUsers = () => dispatch => {
  dispatch({type: REQUEST_USERS})
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => 
      dispatch({
        type: FETCH_USERS,
        users
      })
    )
}

export const fetchdb = () => dispatch => {
  dispatch({type: GET_VIDEOS_REQUEST})
  fetch('/api/users/')
    .then(res => res.json())
    .then(dbVideos => 
      dispatch({
        type: GET_VIDEOS_RESPONSE,
        dbVideos
      })
    )
}