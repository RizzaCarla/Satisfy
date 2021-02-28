export const PLAY_SONG = 'PLAY_SONG';
export const MUTE_SONG = 'MUTE_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const REPEAT_SONG = 'REPEAT_SONG';
export const ENQUEUE_SONG = 'ENQUEUE_SONG';
export const DEQUEUE_SONG = 'DEQUEUE_SONG';
export const SHUFFLE_SONGS = 'SHUFFLE_SONGS';
export const SET_PREV_SONG = 'SET_PREV_SONG';
export const SET_NEXT_SONG = 'SET_NEXT_SONG';
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const SET_CURRENT_PLAYLIST = 'SET_CURRENT_PLAYLIST';

export const playSong = () => ({
  type: PLAY_SONG,
})

export const pauseSong = () => ({
  type: PAUSE_SONG,
})

export const muteSong = (value) => ({
  type: MUTE_SONG,
  value
})

export const repeatSong = (value) => ({
  type: REPEAT_SONG,
  value
})

export const shuffleSongs = (value) => ({
  type: SHUFFLE_SONGS,
  value
})

export const enqueueSong = (song) => ({
  type: ENQUEUE_SONG,
  song
})

export const dequeueSong = () => ({
  type: DEQUEUE_SONG,
})

export const setPrevSong = (songId) => ({
  type: SET_PREV_SONG,
  songId
})

export const setNextSong = (songId) => ({
  type: SET_NEXT_SONG,
  songId
})

export const setCurrentSong = (songId) => ({
  type: SET_CURRENT_SONG,
  songId
})

export const setCurrentPlaylist = (playlist) => ({
  type: SET_CURRENT_PLAYLIST,
  playlist
})