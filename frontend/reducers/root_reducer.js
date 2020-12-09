import session from './session/session_reducer'
import entities from './entities/entities_reducer'
import errors from './errors/errors_reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  entities,
  session,
  errors
})

export default rootReducer;