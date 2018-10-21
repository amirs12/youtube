export const ADD_LIKE = 'ADD_LIKE'
export const ADD_DISLIKE = 'ADD_DISLIKE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const FETCH_USERS = 'FETCH_USERS'
export const GET_VIDEOS_REQUEST = 'GET_VIDEOS_REQUEST'
export const GET_VIDEOS_RESPONSE = 'GET_VIDEOS_RESPONSE'
export const VIDEO_INFO_REQUEST = 'VIDEO_INFO_REQUEST'
export const VIDEO_INFO_RESPONSE = 'VIDEO_INFO_RESPONSE'

let fetchVideoInfo = require('youtube-info')

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

export const getVideoInfo = () => dispatch => {
  //const videoId = "GJm7H9IP5SU"
  dispatch({type: VIDEO_INFO_REQUEST})
  fetchVideoInfo('GJm7H9IP5SU')
    .then(res => res.json())
    .then(videoInfo =>
      dispatch({
        type: VIDEO_INFO_RESPONSE,
        videoInfo
      }) )
}


/*export const addComment = () => dispatch => {
  
}*/