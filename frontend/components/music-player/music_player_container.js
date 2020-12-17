import { connect } from 'react-redux';
import MusicPlayer from './music_player'
import { fetchSong } from '../../actions/song_actions';

const msp = (state) => ({
  songId: state.songSession.songId,
  songs: state.entities.songs
})

const mdp = dispatch => ({
  fetchSong: (songId) => dispatch(fetchSong(songId))
})

export default connect(msp, mdp)(MusicPlayer)