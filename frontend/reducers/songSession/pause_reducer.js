import {
  ON_PAUSE
} from '../../actions/song_actions';

const defaultStatus = ({
  status: true
})

const pauseReducer = (oldState = defaultStatus, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case ON_PAUSE:
      return { status: false }
    default:
      return oldState
  }
}

export default pauseReducer;