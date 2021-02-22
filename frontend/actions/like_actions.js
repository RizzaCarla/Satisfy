import * as likeAPIUtil from '../util/api_like_util';

export const RECEIVE_LIKED_SONGS = 'RECEIVE_LIKED_SONGS';
export const RECEIVE_LIKED_ALBUMS = 'RECEIVE_LIKED_ALBUMS';
export const RECEIVE_LIKED_ARTISTS = 'RECEIVE_LIKED_ARTISTS';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';


export const receiveLikedSongs = (likedSongs) => ({
  type: RECEIVE_LIKED_SONGS,
  likedSongs
})

export const receiveLikedAlbums = (likedAlbums) => ({
  type: RECEIVE_LIKED_ALBUMS,
  likedAlbums
})

export const receiveLikedArtists = (likedArtists) => ({
  type: RECEIVE_LIKED_ARTISTS,
  likedArtists
})

export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
})

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
})

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
})

// THUNK ACTION CREATORS THAT TALKS TO BACKEND TO CHANGE DATABASE

export const fetchLikedSongs = (userId) => dispatch => (
  likeAPIUtil.fetchLikedSongs(userId) 
    .then((likedSongs) => dispatch(receiveLikedSongs(likedSongs)))
)

export const fetchLikedAlbums = (userId) => dispatch => (
  likeAPIUtil.fetchLikedAlbums(userId) 
    .then((likedAlbums) => dispatch(receiveLikedAlbums(likedAlbums)))
)

export const fetchLikedArtists = (userId) => dispatch => (
  likeAPIUtil.fetchLikedArtists(userId) 
    .then((likedArtists) => dispatch(receiveLikedArtists(likedArtists)))
)

export const fetchLikes = () => dispatch => (
  likeAPIUtil.fetchLikes()
    .then((likes) => dispatch(receiveLikes(likes)))
)

export const fetchLike = (likeId) => dispatch => (
  likeAPIUtil.fetchLike(likeId)
    .then((like) => dispatch(receiveLike(like)))
)

export const createLike = (like) => dispatch => (
  likeAPIUtil.createLike(like)
    .then((like) => dispatch(receiveLike(like)))
)

export const updateLike = (like) => dispatch => (
  likeAPIUtil.updateLike(like)
    .then((like) => dispatch(receiveLike(like)))
)

export const destroyLike = (like) => dispatch => (
  likeAPIUtil.destroyLike(like)
    .then((like) => dispatch(receiveLike(like)))
)