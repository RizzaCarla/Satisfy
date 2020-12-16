import { RECEIVE_SONGS, RECEIVE_SONG } from '../../actions/song_actions'

const songsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs
      // return Object.assign({}, oldState, action.songs)
    case RECEIVE_SONG:
      return Object.assign({}, oldState, {[action.song.id]: action.song})
    default:
      return oldState;
  }
}

export default songsReducer