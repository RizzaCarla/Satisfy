import {
  CHECK_PLAY,
  CHECK_PAUSE
} from '../../actions/song_actions';

const pausePlayReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let nextState = Object.assign({}, oldState)
  switch (action.type) {
    case CHECK_PLAY:
      return  Object.assign(nextState, { playTime: action.time})
    case CHECK_PAUSE:
      return Object.assign(nextState, { pauseTime: action.time })
    default:
      return oldState
  }
}

export default pausePlayReducer;