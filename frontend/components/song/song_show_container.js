import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchAlbum, fetchAlbums } from '../../actions/album_actions';
import { fetchSong, changeCurrentSong } from '../../actions/song_actions';
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

const msp = (state, ownProps) => ({
  likes: state.entities.likes,
  likeId: state.entities.likes,
  albums: state.entities.albums,
  userId: state.userSession.userId,
  song: state.entities.songs[ownProps.match.params.songId],

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
  fetchSong: (id) => dispatch(fetchSong(id)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchAlbums: () => dispatch(fetchAlbums()),

  // LIKE
  fetchLikes: () => dispatch(fetchLikes()),
  createLike: (like) => dispatch(createLike(like)),
  destroyLike: (like) => dispatch(destroyLike(like)),

  // QUEUE
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
  clearQueue: () => dispatch(clearQueue()),
  repeatSong: (value) => dispatch(repeatSong(value)),
  shuffleSongs: (value) => dispatch(shuffleSongs(value)),
  setPrevSong: (songId) => dispatch(setPrevSong(songId)),
  setNextSong: (songId) => dispatch(setNextSong(songId)),
  setCurrentSong: (songId) => dispatch(setCurrentSong(songId)),
  setCurrentPlaylist: (playlist) => dispatch(setCurrentPlaylist(playlist)),
  changeCurrentSong: (songId) => dispatch(changeCurrentSong(songId)),
})

export default connect(msp, mdp)(SongShow)