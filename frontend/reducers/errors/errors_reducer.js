import userErrorsReducer from './user_errors_reducer';
import { combineReducers } from 'redux';

const errorsReducer = combineReducers({
  userSession: userErrorsReducer
})

export default errorsReducer