import {
  RECEIVE_ARTISTS,
  RECEIVE_ARTIST
} from '../../actions/artist_actions';

const artistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.artists
    case RECEIVE_ARTIST:
      return Object.assign({}, oldState, { [action.artist.id]: action.artist })
    default:
      return oldState;
  }
}

export default artistsReducer;