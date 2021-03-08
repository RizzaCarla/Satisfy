import { connect } from 'react-redux';
import MusicPlayer from './music_player'
import { fetchSong, fetchSongs, changeCurrentSong } from '../../actions/song_actions';
import { fetchLikes, destroyLike, createLike } from '../../actions/like_actions';
import {
  playSong,
  pauseSong,
  repeatSong,
  clearQueue,
  setPrevSong,
  setNextSong,
  shuffleSongs,
  setCurrentSong,
  setCurrentPlaylist,
} from '../../actions/queue_actions';

const msp = (state) => ({
  songs: state.entities.songs,
  songId: state.songSession.song.songId,
  song: state.entities.songs[state.songSession.song.songId],

  muted: state.queue.muted,
  playing: state.queue.playing,
  repeating: state.queue.repeating,
  shuffling: state.queue.shuffling,
  prevSongId: state.queue.prevSongId,
  nextSongId: state.queue.nextSongId,
  currentSongId: state.queue.currentSongId,
  currentPlaylist: state.queue.currentPlaylist,
})

const mdp = dispatch => ({
  // DISPLAY
  fetchSongs: () => dispatch(fetchSongs()),
  fetchSong: (songId) => dispatch(fetchSong(songId)),

  // LIKE
  fetchLikes: () => dispatch(fetchLikes()),
  createLike: (like) => dispatch(createLike(like)),
  destroyLike: (like) => dispatch(destroyLike(like)),

  // QUEUE
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
  clearQueue: () => dispatch(clearQueue()),
  muteSong: (value) => dispatch(muteSong(value)),
  repeatSong: (value) => dispatch(repeatSong(value)),
  shuffleSongs: (value) => dispatch(shuffleSongs(value)),
  setPrevSong: (songId) => dispatch(setPrevSong(songId)),
  setNextSong: (songId) => dispatch(setNextSong(songId)),
  setCurrentSong: (songId) => dispatch(setCurrentSong(songId)),
  setCurrentPlaylist: (playlist) => dispatch(setCurrentPlaylist(playlist)),
  changeCurrentSong: (songId) => dispatch(changeCurrentSong(songId)),

})

export default connect(msp, mdp)(MusicPlayer)