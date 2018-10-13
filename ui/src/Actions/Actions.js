export const ADD_LIKE = 'ADD_LIKE'
export const ADD_DISLIKE = 'ADD_DISLIKE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const FETCH_USERS = 'FETCH_USERS'

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
//  fetch('/api/users/')
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => 
      dispatch({
        type: FETCH_USERS,
        users
      })
    )
}

/*export const addComment = () => dispatch => {
  
}*/