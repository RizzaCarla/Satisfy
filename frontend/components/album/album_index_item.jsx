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

    if (!this.props.album) {
      return null
    }

    if (!this.props.artist) {
      return null
    }

    if (!this.props.artist.photoUrl) {
      return null
    }

    if (Object.values(this.props.artists).length === 0) {
      return <div></div>
    } else {
      return (
        <div className='album-index-item-container'>
          <Link to={`/albums/${this.props.album.id}`}>
            <div className='album-item'>
              <img className='album-photo' src={this.props.album.photoUrl} />
              <img className="button-logo" src={window.playButton} onClick={this.handlePlay()} />
              <h1 className="album-title">
                {this.props.album.album_title}
              </h1>
              <p>
                {this.props.artists[this.props.album.artist_id].artist_name}
              </p>
            </div>
          </Link>
        </div>
      )
    }
  }
}

export default AlbumIndexItem