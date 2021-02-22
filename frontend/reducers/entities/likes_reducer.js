import { 
  RECEIVE_LIKED_SONGS,
  RECEIVE_LIKED_ALBUMS,
  RECEIVE_LIKED_ARTISTS,
  RECEIVE_LIKES, 
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../../actions/like_actions'

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_LIKED_SONGS:
      return action.likedSongs
    case RECEIVE_LIKED_ALBUMS:
      return action.likedAlbums
    case RECEIVE_LIKED_ARTISTS:
      return action.likedArtists
    case RECEIVE_LIKES:
      return action.likes
    case RECEIVE_LIKE:
      return Object.assign({}, oldState, { [action.like.id]: action.like })
    case REMOVE_LIKE:
      return oldState
    default:
      return oldState;
  }
}

export default likesReducer;