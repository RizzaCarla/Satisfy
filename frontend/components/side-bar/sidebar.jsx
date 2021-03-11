import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';


class Sidebar extends React.Component {

  handleSplash() {
    if (this.props.location.pathname !== "/us") {
      return ( 
        <div className='sidebar'>
          <Link to='/home'>
            <img id="fullLogo" src={window.fullLogo} />
          </Link>
          <ul className='sidebar-list'>
            <Link to='/home'>
              <div className='navigate-button'>
                <i id='topside-buttons' className="fa">&#xf015;</i>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;Home</li>
              </div>
            </Link>
            <Link to='/search'>
              <div className='navigate-button'>
                <i id='topside-buttons' className="fa">&#xf002;</i>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search</li>
              </div>
            </Link>
            <Link to='/library'>
              <div className='navigate-button'>
                <p id='topside-buttons'><i  className='fas'>&#xf7a5;</i>\</p>
                  &nbsp; 

                  <li>&nbsp;&nbsp;&nbsp; Your Library</li>
              </div>
            </Link>
            <h1 className='sidebar-header'>Playlists</h1>
            {/* <div className='navigate-button'>
              <i className="material-icons">&#xe146;</i> 
              &nbsp; 
              &nbsp; 
              <li className='createplaylist'>Create Playlist</li>
            </div> */}
            <Link to='/liked-songs'>
              <div className='navigate-button'>
                &nbsp; 
                <div className='heart-bg'>
                  <i id='heart' className='fas'>&#xf004;</i>
                </div>
                &nbsp; 
                &nbsp; 
                &nbsp; 
                <li className='likedsongs'>Liked Songs</li>
              </div>
            </Link>
            <hr className='line'/>
            {/* <ul className='playlist'>
            </ul> */}
          </ul>
        </div>
      )
      
    }
  }

  render() {
    return(
      <div>
        {this.handleSplash()}
      </div>
    )
  }
}

export default withRouter(Sidebar);