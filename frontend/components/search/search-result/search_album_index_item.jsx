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
      return (
        <div className='album-index-item-container'>
          <Link to={`/albums/${this.props.albumId}`}>
            <div className='album-item'>
              <img className='album-photo' src={this.props.photoUrl} />
              <img className="button-logo" src={window.playButton} onClick={this.handlePlay()} />
              <h1 className="album-title">
                {this.props.albumTitle}
              </h1>
              <p>
                {this.props.artistName}
              </p>
            </div>
          </Link>
        </div>
      )
  }
}

export default AlbumIndexItem