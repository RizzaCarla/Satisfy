import { connect } from 'react-redux';
import MusicPlayer from './music_player'
import { fetchSong } from '../../actions/song_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
  song: state.entities.songs[ownProps.match.params.songId]
})

const mdp = dispatch => ({
  fetchSong: (songId) => dispatch(fetchSong(songId))
})

export default connect(msp, mdp)(MusicPlayer)