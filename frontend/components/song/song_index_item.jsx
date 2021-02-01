import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: '', 
      imageFile: ''
    }
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
      if (Object.values(this.props.artists).length === 0) {
        return <div></div>
      } else {
        return (
          <div className='song-index-item-container'>
          <Link to={`/songs/${this.props.song.id}`}>
            <div className='song-item'>
              <img className='song-photo' src={this.props.albums[this.props.song.album_id].photoUrl}/>
              <img className="button-logo" src={window.playButton} onClick={this.handlePlay()}/>
              <h1 className="song-title">
                {this.props.song.song_title}
              </h1>
              <p>
                {this.props.artists[this.props.albums[this.props.song.album_id].artist_id].artist_name}
              </p>
            </div>
          </Link>
        </div>
      )
    }
  }
}


export default SongIndexItem