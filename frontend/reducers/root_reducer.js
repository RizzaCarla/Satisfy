import libraryTabReducer from './library/library_tab_reducer';
import queue from './queue/queue_reducer';
import userSession from './userSession/user_session_reducer';
import songSession from './songSession/song_session_reducer';
import searchReducer from './search/search_reducer';
import entities from './entities/entities_reducer';
import errors from './errors/errors_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  queue,
  errors,
  entities,
  userSession,
  songSession,
  searchReducer,
  libraryTabReducer,
})

export default rootReducer;