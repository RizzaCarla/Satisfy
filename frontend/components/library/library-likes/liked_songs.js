import React from 'react';
import SongIndexItem from '../../song/song_index_item';

class LikedSongs extends React.Component {
  render() {
    return(
      <div>
        <SongIndexItem 
          song={song}
          songId={song.id}
          songArtist={song.artist}
          albumPhotoUrl={song.albumPhotoUrl}
          changeCurrentSong={this.props.changeCurrentSong}
        />
      </div>
    )
  }
}

export default LikedSongs