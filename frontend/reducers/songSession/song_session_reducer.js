import {
  RECEIVE_SONG,
  CHANGE_CURRENT_SONG
} from '../../actions/song_actions';

const nullSong = Object.freeze({
  songId: null
})

const songReducer = (oldState = nullSong, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SONG:
      return { songId: action.song.id }
    case CHANGE_CURRENT_SONG:
      return { songId: action.songId }
    default:
      return oldState;
  }
}

export default songReducer