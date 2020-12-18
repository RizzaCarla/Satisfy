import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';


class Sidebar extends React.Component {

  handleSplash() {
    if (this.props.location.pathname !== "/us") {
      return ( 
        <div className='sidebar'>
          <Link to='/us'>
            <img id="fullLogo" src={window.fullLogo} />
          </Link>
          <ul className='sidebar-list'>
            <Link to='/us'>
              <div className='navigate-button'>
                  <i className="fa">&#xf015;</i>
                  &nbsp; 
                  &nbsp; 
                  &nbsp; 
                  <li>Home</li>
              </div>
            </Link>
            <Link to='/search'>
              <div className='navigate-button'>
                  &nbsp; 
                  <i className="fa">&#xf002;</i>
                  &nbsp; 
                  &nbsp; 
                  &nbsp; 
                  <li>Search</li>
              </div>
            </Link>
            <Link to='/songs'>
              <div className='navigate-button'>
                  <i className='fas'>&#xf7a5;&#xf715;</i>
                  &nbsp; 
                  &nbsp; 
                  &nbsp; 
                  <li> Your Library</li>
              </div>
            </Link>
            <h1 className='sidebar-header'>Playlists</h1>
            <div className='navigate-button'>
              <i className="material-icons">&#xe146;</i> 
              &nbsp; 
              &nbsp; 
              &nbsp; 
              <li className='createplaylist'>Create Playlist</li>
            </div>
            <div className='navigate-button'>
              &nbsp; 
              <div className='heart-bg'>
                <i id='heart' className='fas'>&#xf004;</i>
              </div>
              &nbsp; 
              &nbsp; 
              &nbsp; 
              &nbsp; 
              <li className='likedsongs'>Liked Songs</li>
            </div>
            <hr className='line'/>
            <ul className='playlist'>
              <li>Anime Music</li>
              <li>Lo-Fi</li>
              <li>Chill-hop</li>
              <li>Funk</li>
              <li>Jazzy</li>
              <li>RnB</li>
              <li>Tagalog Songs</li>
              <li>J-POP</li>
              <li>K-POP</li>
              <li>C-POP</li>
              <li>POP</li>
              <li>Hip Hop</li>
              <li>Indie Rock</li>
              <li>Christmas Music</li>
              <li>Meme Songs</li>
              <li>Theme Songs</li>
              <li>OST</li>
              <li>Classical Music</li>
            </ul>
            <div className='navigate-button'>
                <i className='far'>&#xf358;</i>
              &nbsp; 
              &nbsp; 
              <li className=''>Install App</li>
            </div>
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