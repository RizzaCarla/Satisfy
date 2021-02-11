import React from 'react';
import SongShowHeader from './song_show_header';
import SongShowPlaylist from './song_show_playlist';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import NavBarContainer from '../nav-bar/navbar_container';

class SongShow extends React.Component {
  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId)
      .then(() => this.props.fetchAlbums())
  }
  render() {
    if (this.props.song !== undefined) {
      console.log(this.props.song.artist)
      return (
        <div>
          {/* <NavBarContainer />
          <SideBarContainer />
        <MusicPlayerContainer /> */}
          <div className='song-show-container'>
            <header>
              <SongShowHeader
                key={this.props.songId}
                song={this.props.song}
                songArtist={this.props.song.artist}
                songAlbum={this.props.albums[this.props.song.album_id]}
                songTitle={this.props.song.song_title}
                totalSongTime={this.props.song.total_song_time}
                />
            </header>
            <div>
              <SongShowPlaylist
                song={this.props.song}
                songArtist={this.props.song.artist}
                changeCurrentSong={this.props.changeCurrentSong}
                />
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default SongShow;