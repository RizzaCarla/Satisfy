import * as SessionAPIUtil from '../util/api_session_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_SESSION_ERRORS = 'CLEAR_USER_SESSION_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

export const clearUserErrors = () => ({
  type: CLEAR_USER_SESSION_ERRORS
})

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user) 
    .then((user) => dispatch(receiveCurrentUser(user)),
          err => (dispatch(receiveUserErrors(err.responseJSON)))
    )
)

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()), 
          err => (dispatch(receiveUserErrors(err.responseJSON)))
    )
)

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
          err => (dispatch(receiveUserErrors(err.responseJSON)))
    )
)