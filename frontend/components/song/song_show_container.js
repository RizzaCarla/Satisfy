import { connect } from 'react-redux';
import showSong from './song_show';

const msp = (state, ownProps) => {
  debugger
  return(

    {song: state.songs[ownProps.match.params.songId]}
  )
}

const mdp = dispatch => ({
  fetchSong: (songId) => dispatch(fetchSong(songId))
})

export default connect(msp, mdp)(showSong)