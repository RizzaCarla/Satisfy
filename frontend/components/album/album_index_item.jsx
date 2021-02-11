import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    return (
      (e) => {
        // this.props.changeCurrentSong(this.props.song.id)
        pButton.innerHTML = '&#xe035;'
      }
    )
  }

  render() {

    if (this.props.album !== undefined && this.props.artists !== undefined && this.props.albumPhotoUrl !== undefined) {
      return (
        <div className='album-index-item-container'>
          <Link to={`/albums/${this.props.albumId}`}>
            <div className='album-item'>
              <div className='album-item-images'>
                <img className='album-photo' src={this.props.albumPhotoUrl} />
              </div>
                {/* <img className="button-logo" src={window.playButton} onClick={this.handlePlay()} /> */}
              <div className='album-item-details'>
                <h1 className="album-title">
                  {this.props.albumTitle}
                </h1>
                <p>
                  {(this.props.artists[this.props.albumArtistId]).artist_name}
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

export default AlbumIndexItem