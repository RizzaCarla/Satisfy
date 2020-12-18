import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: '', 
      imageFile: ''
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePreview = this.handlePreview.bind(this)
  }

  handlePlay() {
    return(
      (e) => this.props.changeCurrentSong(this.props.song.id)
    )
  }

  handlePreview() {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ songUrl: reader.result, songFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ songUrl: "", songFile: null });
    }
  }

  render() {
    return (
      <div className='song-index'>
        {/* <img src={this.props.song.songUrl} onLoad={this.handlePreview}/> */}
        <h1>
          {this.props.song.song_title}
        </h1>
        <div >
          <img className="button-logo" src={window.playButton} onClick={this.handlePlay()}/>
        </div>
      </div>
    )
  }
}


export default SongIndexItem