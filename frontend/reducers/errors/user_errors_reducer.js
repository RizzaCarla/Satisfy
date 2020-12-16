import {
  RECEIVE_USER_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_USER_SESSION_ERRORS
} from '../../actions/user_actions'

const userErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_USER_SESSION_ERRORS:
      return [];
    default:
      return oldState;
  }
}

export default userErrorsReducer;