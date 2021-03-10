import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

class SongShowPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      shuffling: false,
      songs: this.props.songs,
      playing: this.props.playing,
      songLikeInfo: this.props.songLikeInfo,
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleQueue = this.handleQueue.bind(this);
  }
  
  componentDidMount() {
    if (this.props.songLikeInfo !== null) {
      this.setState({
        liked: true,
        songLikeInfo: this.props.songLikeInfo
      });
    }

    if (this.props.currentSongId !== this.props.song.id) {
      this.props.pauseSong()
      this.setState({
        playing: false
      })
    }

    if (this.props.songs) {
      this.props.songs.forEach((song) => {
        if (song.id === this.props.currentSongId) {
          this.props.playSong()
          this.setState({
            playing: true
          })
          this.handleQueue(this.props.currentSongId, this.props.currentPlaylist)
        } else {
          // this.props.pauseSong()
          this.setState({
            playing: false
          })
        }
      })
    }

  }
  
  componentDidUpdate(prevProps) {
    if (this.props.songLikeInfo && this.props.songLikeInfo != prevProps.songLikeInfo) {
      if (this.props.songLikeInfo !== null) {
        this.setState({
          liked: true,
          songLikeInfo: this.props.songLikeInfo
        });
      }
    }

    if (this.props.shuffling && this.props.shuffling !== prevProps.shuffling) {
      let randomPlaylist = this.props.songs
      if (this.props.shuffling === true) {
        for (let i = this.props.songs.length - 1; i > 0; i--) {
          let orig = randomPlaylist[i]
          let j = Math.floor(Math.random() * i)
          randomPlaylist[i] = randomPlaylist[j]
          randomPlaylist[j] = orig
        }
        this.setState({
          songs: randomPlaylist
        })
      } else {
        this.setState({
          songs: this.props.songs
        })
      }
    }
  }
  
  handlePlay() {
    if (this.state.playing) {
      this.props.pauseSong()
      this.setState({
        playing: false
      })
    } else {
      this.props.playSong()
      this.setState({
        playing: true
      })
    }
  }
    
  handleLike() {
    if (this.state.songLikeInfo && this.state.liked === true) {
        this.props.destroyLike(this.state.songLikeInfo.id)
          .then(() => this.setState({
            liked: false,
            songLikeInfo: null
          }))
    } else {
      this.props.createLike({likeable_id: this.props.song.id, likeable_type: "Song"})
        .then(() => {
          this.props.fetchLikes()
          .then((result) => {
            Object.values(result.likes).map((like) => {
              if ((like.likeable_id === this.props.song.id) && (like.liker_id === this.props.userId)) {
                this.setState({
                  liked: true,
                  songLikeInfo: like
                })
              }
            })
          })
        })
    }
  }

  handleQueue(songId, allSongs) {
    // SETS CURRENT PLAYLIST
    this.props.setCurrentPlaylist(allSongs)

    // SETS CURRENT SONG
    this.props.playSong();
    this.props.setCurrentSong(songId);
    this.props.changeCurrentSong(songId);
    this.setState({
      playing: true
    })
  }

  render() {

    if (this.props.songArtist === undefined) {
      return null
    }

    if (this.props.songs === undefined) {
      return null
    }

    const greenButton = this.props.playing === true ? <PauseCircleFilledIcon id='greenButton' /> : <PlayCircleFilledIcon id='greenButton' />
    const label = this.state.songLikeInfo ? <FavoriteIcon style={{ fontSize: 40 }} /> : <FavoriteBorderIcon style={{ fontSize: 40 }} />
    
    return (
      <div className='playlist-container'>
        <div className='item-play-like'>
          <div className="greenButton-container" onClick={() => {
            // if (this.props.currentPlaylist.length > 0) {
            //   this.handleQueue(this.props.currentSongId, this.props.currentPlaylist)
            // } else {
              this.handleQueue(this.props.song.id, this.state.songs);
            // }
            this.handlePlay();
          }}>
            {greenButton}
          </div>
          <div className="likeButton" onClick={this.handleLike}>{label}</div>
        </div>
        <div className='playlist-header'>
          <div className='playlist-left'>
            <h1 className='playlist-item-count'>#</h1>
            <div className='playlist-left-title-name'>
              <h1>TITLE</h1>
            </div>
          </div>
          <i id='playlist-item-time-icon' className='far'>&#xf017;</i>
        </div>
        <hr className='line-separator'></hr>
        <ul className='playlist'>
          <li className='playlist-item' onClick={() => this.handleQueue(this.props.song.id, this.state.songs)}>
            <div className='playlist-left'>
              <p className='playlist-item-count'>1</p>
              <div className='playlist-left-title-name'>
                <h1>{this.props.song.song_title}</h1>
                <h1>{this.props.songArtist.artist_name}</h1>
              </div>
            </div>
            <h1 className='playlist-item-time'>{this.props.song.total_song_time}</h1>
          </li>
        </ul>
      </div>
    )
  }
}

export default SongShowPlaylist