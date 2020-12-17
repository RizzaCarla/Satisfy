import { connect } from 'react-redux';
import MusicPlayer from './music_player'
import { fetchSong, checkPlay, checkPause } from '../../actions/song_actions';

const msp = (state) => ({
  songId: state.songSession.song.songId,
  songs: state.entities.songs
})

const mdp = dispatch => ({
  fetchSong: (songId) => dispatch(fetchSong(songId)),
  checkPause: (time) => dispatch(checkPause(time)),
  checkPlay: (time) => dispatch(checkPlay(time)),
})

export default connect(msp, mdp)(MusicPlayer)