import * as artistAPIUtil from '../util/api_artist_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
})

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
})

export const fetchArtists = () => dispatch => (
  artistAPIUtil.fetchArtists()
    .then((artists) => dispatch(receiveArtists(artists)))
)

export const fetchArtist = id => dispatch => (
  artistAPIUtil.fetchArtist(id)
    .then((artist) => dispatch(receiveArtist(artist)))
)