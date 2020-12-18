import PauseReducer from './pause_reducer';
import PlayReducer from './play_reducer';
import SongIdReducer from './song_id_reducer';
import { combineReducers } from 'redux';

const songSession = combineReducers ({
  song: SongIdReducer,
  playStatus: PlayReducer,
  pauseStatus: PauseReducer
})

export default songSession;