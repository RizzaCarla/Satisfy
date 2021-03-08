import { 
  PLAY_SONG,
  MUTE_SONG,
  PAUSE_SONG,
  REPEAT_SONG,
  CLEAR_QUEUE,
  SHUFFLE_SONGS,
  SET_PREV_SONG,
  SET_NEXT_SONG,
  SET_CURRENT_SONG,
  SET_CURRENT_PLAYLIST
} from '../../actions/queue_actions'

const defaultState = {
  muted: false,
  playing: false,
  repeating: false,
  shuffling: false,
  prevSongId: null,
  nextSongId: null,
  currentSongId: null,
  currentPlaylist: []
}

const queue = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case PLAY_SONG:
      newState.playing = true
      return newState
    case MUTE_SONG:
      newState.muted = action.value
      return newState
    case PAUSE_SONG:
      newState.playing = false
      return newState
    case REPEAT_SONG:
      newState.repeating = action.value
      return newState
    case SHUFFLE_SONGS:
      newState.shuffling = action.value
      return newState
    case CLEAR_QUEUE:
      return newState = {
        muted: false,
        playing: false,
        repeating: false,
        shuffling: false,
        prevSongId: null,
        nextSongId: null,
        currentSongId: null,
        currentPlaylist: []
      }
    case SET_PREV_SONG:
      newState.prevSongId = action.songId
      return newState
    case SET_NEXT_SONG:
      newState.nextSongId = action.songId
      return newState
    case SET_CURRENT_SONG:
      newState.currentSongId = action.songId
      return newState
    case SET_CURRENT_PLAYLIST:
      newState.currentPlaylist = action.playlist
      return newState
    default:
      return oldState
  }
}

export default queue