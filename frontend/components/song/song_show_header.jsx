import React from 'react';

class SongShowHeader extends React.Component {

  render() {
    if (this.props.songArtist === undefined) {
      return null
    }
    console.log(this.props.song.artistPhotoUrl)
    return (
      <div>
        <div className='song-item-song-cover'>
          <img className='song-item-photo' src={this.props.song.albumPhotoUrl} />
        </div>
        <div className='song-item-details'>
          <h1>SINGLE</h1>
          <h1 className="song-title">
            {this.props.songTitle}
          </h1>
          <img className='song-item-artist-photo' src={this.props.song.artistPhotoUrl} />
          <p>
            {this.props.songArtist.artist_name}
          </p>
          <i className="fa">&#xf111;</i>
          <p>1 song, {this.props.totalSongTime}</p>
        </div>
      </div>
    )
  }
}

export default SongShowHeader