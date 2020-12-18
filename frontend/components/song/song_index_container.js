import { connect } from 'react-redux';
import songsIndex from './song_index'
import { fetchSongs, changeCurrentSong } from '../../actions/song_actions'

const msp = (state) => ({
  songs: Object.values(state.entities.songs),
  songId: state.songSession.song.songId
})

const mdp = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  changeCurrentSong: (songId) => dispatch(changeCurrentSong(songId))
})

export default connect(msp, mdp)(songsIndex)