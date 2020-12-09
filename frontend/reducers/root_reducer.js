import sessionReducer from './reducers/session_reducer'
import entities from './entities/entities_reducer'
import { combineReducers } from 'react'

const rootReducer = combineReducers({
  sessionReducer,
  entities,
})

export default rootReducer;