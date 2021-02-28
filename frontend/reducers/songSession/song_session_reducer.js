import SongIdReducer from './song_id_reducer';
import { combineReducers } from 'redux';

const songSession = combineReducers ({
  song: SongIdReducer,
})

export default songSession;