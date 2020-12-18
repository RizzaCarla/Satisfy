import * as songAPIUtil from '../util/api_song_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const CHANGE_CURRENT_SONG = 'CHANGE_CURRENT_SONG';
export const ON_PLAY = 'ON_PLAY';
export const ON_PAUSE = 'ON_PAUSE';

export const changeCurrentSong = (songId) => ({
  type: CHANGE_CURRENT_SONG,
  songId
})

export const onPlay = () => ({
  type: ON_PLAY,
})

export const onPause = () => ({
  type: ON_PAUSE,
})

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
})

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
})

export const fetchSongs = () => dispatch => (
  songAPIUtil.fetchSongs()
    .then((songs) => dispatch(receiveSongs(songs)))
)

export const fetchSong = id => dispatch => (
  songAPIUtil.fetchSong(id)
    .then((song) => dispatch(receiveSong(song)))
)