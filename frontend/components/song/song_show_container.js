import { connect } from 'react-redux';
import SongShow from './song_show';

const msp = (state, ownProps) => {
  return(

    {song: state.songs[ownProps.match.params.songId]}
  )
}

const mdp = dispatch => ({
  fetchSong: (songId) => dispatch(fetchSong(songId))
})

export default connect(msp, mdp)(SongShow)