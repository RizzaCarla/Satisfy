import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS, RECEIVE_USER } from '../../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, oldState, { [action.user.id]: action.user})
    case RECEIVE_ALL_USERS:
      return action.users
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.user.id]: action.user })
    default:
      return oldState;
  }
}

export default usersReducer
