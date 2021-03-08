import React from 'react';
import ArtistShowHeader from './artist_show_header';
import ArtistShowPlaylist from './artist_show_playlist';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import NavBarContainer from '../nav-bar/navbar_container';

class ArtistShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      allLikes: [],
      artistSongs: [],
      shuffling: false,
      artistLikeInfo: null,
    }
  }
  
  componentDidMount() {
    this.props.fetchAlbums()
    .then(() => this.props.fetchArtist(this.props.match.params.artistId))
      .then(() => {
        this.props.fetchLikes()
          .then(() => this.setState({
            allLikes: Object.values(this.props.likes)
          }))
          .then(() => {
            this.state.allLikes.forEach((like) => {
              if ((like.likeable_id === this.props.artist.id) && (like.liker_id === this.props.userId)) {
                this.setState({
                  artistLikeInfo: like
                })
              }
            })
          })
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.allLikes && this.props.allLikes !== prevProps.allLikes) {
      this.props.fetchArtist(this.props.match.params.artistId)
        .then(() => this.props.fetchAlbums())
        .then(() => {
          this.props.fetchLikes()
            .then(() => this.setState({
              allLikes: Object.values(this.props.likes)
            }))
            .then(() => {
              this.state.allLikes.forEach((like) => {
                if ((like.likeable_id === this.props.artist.id) && (like.liker_id === this.props.userId)) {
                  this.setState({
                    artistLikeInfo: like
                  })
                }
              })
            })
        })
    }
  }
  
  render() {
    if (!this.props.artist || !this.props.albums) {
      return null
    }
    
    return (
      <div className='show-container'>
      <NavBarContainer />
      <SideBarContainer />
      <MusicPlayerContainer />
      <div className='inner-show-container'>
          <div className='artist-show-header' style={{ backgroundImage: `url(${this.props.artist.artistPhotoUrl})` }}>
          <ArtistShowHeader
            key={this.props.artistId}
            artistPhotoUrl={this.props.artist.artistPhotoUrl}
            artistName={this.props.artist.artist_name}
          />
        </div>
        <div>
          <ArtistShowPlaylist
            artist={this.props.artist}
            albums={this.props.albums}
            userId={this.props.userId}
            allLikes={this.state.allLikes}
            artistId={this.props.artist.id} 
            fetchLikes={this.props.fetchLikes}
            createLike={this.props.createLike}
            destroyLike={this.props.destroyLike}
            artistSongs={this.props.artist.songs}
            artistName={this.props.artist.artist_name}
            artistLikeInfo={this.state.artistLikeInfo}
            changeCurrentSong={this.props.changeCurrentSong}
            songId={this.props.songId}
            
            muted={this.props.muted}
            playing={this.props.playing}
            repeating={this.props.repeating}
            shuffling={this.props.shuffling}
            prevSongId={this.props.prevSongId}
            nextSongId={this.props.nextSongId}
            currentSongId={this.props.currentSongId}
            currentPlaylist={this.props.currentPlaylist}

            playSong={this.props.playSong}
            pauseSong={this.props.pauseSong}
            clearQueue={this.props.clearQueue}
            repeatSong={this.props.repeatSong}
            setPrevSong={this.props.setPrevSong}
            setNextSong={this.props.setNextSong}
            shuffleSongs={this.props.shuffleSongs}
            setCurrentSong={this.props.setCurrentSong}
            setCurrentPlaylist={this.props.setCurrentPlaylist}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistShow