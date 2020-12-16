import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../../actions/user_actions'

const nullUser = Object.freeze({
  userId: null
})
const sessionReducer = (oldState = nullUser, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { userId: action.user.id }
    case LOGOUT_CURRENT_USER:
      return nullUser
    default:
      return oldState;
  }
}

export default sessionReducer;