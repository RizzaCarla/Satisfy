import { connect } from 'react-redux';
import Sidebar from './sidebar'

const msp = state => ({
  user: state.entities.users[state.session.id]
})

// const mdp = dispatch => ({

// })

export default connect(msp, null)(Sidebar)