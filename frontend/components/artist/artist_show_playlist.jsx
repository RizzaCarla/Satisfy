import React from 'react';

class ArtistShowPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    // console.log(this.props.artistSongs[0].id)
    return (
      (e) => {
        // this.props.changeCurrentSong(this.props.artistSongs[0].id)
        pButton.innerHTML = '&#xe035;'
      }
    )
  }
  
  render() {
    
    if (this.props.artistSongs !== undefined) {  
      return (
        <div>
          <div className='artist-item-play-like'>
            <img className="button-logo" src={window.playButton} onClick={this.handlePlay()} />
            <p>FOLLOWING</p>
          </div>
          <p>SONGS</p>
          <ul>
            {
              this.props.artistSongs.map((song, count3) => {
                  console.log(song)
                return(
                    <li key={song.id}>
                    <p>{count3}</p>
                    <h1>{song.song_title}</h1>
                    <h1>{this.props.artistName}</h1>
                    <h1>{song.total_song_time}</h1>
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
    } else {
      return null
    }
  } 
}

export default ArtistShowPlaylist