import {
  ON_PLAY
} from '../../actions/song_actions';

const defaultStatus = ({
  status: false
})

const playReducer = (oldState = defaultStatus, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case ON_PLAY:
      return { status: true }
    default:
      return oldState
  }
}

export default playReducer;