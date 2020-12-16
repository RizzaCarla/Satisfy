import {
  RECEIVE_SONG
} from '../../actions/song_actions';

const nullSong = Object.freeze({
  id: null
})

const songReducer = (oldState = nullSong, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SONG:
      return { id: action.song.id }
    default:
      return oldState;
  }
}

export default songReducer