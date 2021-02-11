import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM
} from '../../actions/album_actions';

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return action.albums
    case RECEIVE_ALBUM:
      return Object.assign({}, oldState, { [action.album.id]: action.album })
    default:
      return oldState;
  }
}

export default albumsReducer;