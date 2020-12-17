import PausePlayReducer from './pause_play_reducer';
import SongIdReducer from './song_id_reducer';
import { combineReducers } from 'redux';

const songSession = combineReducers ({
  song: SongIdReducer,
  time: PausePlayReducer
})

export default songSession;