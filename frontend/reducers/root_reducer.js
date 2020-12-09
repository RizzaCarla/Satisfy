import sessionReducer from './reducers/session_reducer'
import { combineReducers } from 'react'

const rootReducer = combineReducers({
  sessionReducer,
})

export default rootReducer;