import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handlePlay = this.handlePlay.bind(this)
  }
  
  handlePlay() {
    return(
      (e) => {
        this.props.changeCurrentSong(this.props.song.id)
        pButton.innerHTML = '&#xe035;'
      }
      )
    }
    
    render() {
      if (this.props.song !== undefined) {
        return (
          <div className='song-index-item-container'>
          <Link to={`/songs/${this.props.song.id}`}>
            <div className='song-item'>
              <div className='song-item-images'>
                  <img className='song-photo' src={this.props.albumPhotoUrl}/>
              </div>
              {/* <img className="button-logo" src={window.playButton} onClick={this.handlePlay()}/> */}
              <div className='song-item-details'>
                <h1 className="song-title">
                  {this.props.song.song_title}
                </h1>
                <p>
                    {this.props.songArtist.artist_name}
                </p>
              </div>
            </div>
          </Link>
        </div>
      )
    } else {
      return null
    }
  }
}


export default SongIndexItem