import React from 'react';
import { Link } from 'react-router-dom';

class SearchSongIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handlePlay = this.handlePlay.bind(this)
  }

  handlePlay() {
    return (
      (e) => {
        this.props.changeCurrentSong(this.props.song.id)
        pButton.innerHTML = '&#xe035;'
      }
    )
  }

  render() {
    return (
      <div className='song-index-item-container'>
        <Link to={`/songs/${this.props.songId}`}>
          <div className='song-item'>
            <div className='song-item-images'>
              <img className='song-photo' src={this.props.albumPhotoUrl} />
            </div>
            {/* <img className="button-logo" src={window.playButton} onClick={this.handlePlay()} /> */}
            <div className='song-item-details'>
              <h1 className="song-title">
                {this.props.songTitle}
              </h1>
              <p>
                {this.props.artistName}
              </p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}


export default SearchSongIndexItem