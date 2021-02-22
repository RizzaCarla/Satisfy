import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {

    render() {
      if (this.props.song !== undefined) {
        return (
          <div className='song-index-item-container'>
          <Link to={`/songs/${this.props.song.id}`}>
            <div className='song-item'>
              <div className='song-item-images'>
                  <img className='song-photo' src={this.props.albumPhotoUrl}/>
              </div>
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