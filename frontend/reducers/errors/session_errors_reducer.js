import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER
} from '../../actions/session_actions'

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case RECEIVE_CURRENT_USER:
      delete newState[action.errors]
      return [];
    default:
      return oldState;
  }
}

export default sessionErrorsReducer;