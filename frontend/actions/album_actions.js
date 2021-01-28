import * as albumAPIUtil from '../util/api_album_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
})

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
})

export const fetchAlbums = () => dispatch => (
  albumAPIUtil.fetchAlbums()
    .then((albums) => dispatch(receiveAlbums(albums)))
)

export const fetchAlbum = (id) => dispatch => (
  albumAPIUtil.fetchAlbum(id)
    .then((album) => dispatch(receiveAlbum(album)))
)