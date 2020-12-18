import { connect } from 'react-redux';
import MusicPlayer from './music_player'
import { fetchSong, onPlay, onPause } from '../../actions/song_actions';

const msp = (state) => ({
  songId: state.songSession.song.songId,
  songs: state.entities.songs,
  playStatus: state.songSession.playStatus.status,
  pauseStatus: state.songSession.pauseStatus.status
})

const mdp = dispatch => ({
  fetchSong: (songId) => dispatch(fetchSong(songId)),
  onPause: () => dispatch(onPause()),
  onPlay: () => dispatch(onPlay()),
})

export default connect(msp, mdp)(MusicPlayer)