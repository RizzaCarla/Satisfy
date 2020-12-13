import * as songAPIUtil from '../util/api_song_util'

export const RECEIVE_SONGS = 'RECEIVE_SONGS'
export const RECEIVE_SONG = 'RECEIVE_SONG'

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
})

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
})

export const fetchSongs = songs => dispatch => (
  songAPIUtil.fetchSongs(songs)
    .then((songs) => dispatch(receiveSong(songs)))
)

export const fetchSong = id => dispatch => (
  songAPIUtil.fetchSong(id)
    .then((id) => dispatch(receiveSong(id)))
)