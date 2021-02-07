import React from 'react';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import NavBarContainer from '../nav-bar/navbar_container';

class Library extends React.Component {
  render() {
    return (
      <div>
        <NavBarContainer />
        <SideBarContainer />
        <MusicPlayerContainer />
        <div className='main-library-container'>
          {/* <div className='library-mock-sidebar'></div> */}
          <div className='library-container'>
            <h1>testing testing</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Library