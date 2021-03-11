import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

class AlbumShowPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      shuffling: false,
      playing: false,
      albumSongs: this.props.albumSongs,
      albumLikeInfo: this.props.albumLikeInfo,
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleQueue = this.handleQueue.bind(this);
  }

  componentDidMount() {
    if (this.props.albumLikeInfo !== null) {
      this.setState({
        liked: true,
        albumLikeInfo: this.props.albumLikeInfo,
      });
    }

    if (this.props.currentPlaylist.length >= 1) {
      if (this.props.currentPlaylist === this.props.albumSongs) {
        this.setState({
          playing: true
        })
      } else {
        this.setState({
          playing: false
        })
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.albumLikeInfo && this.props.albumLikeInfo !== prevProps.albumLikeInfo) {
      if (this.props.albumLikeInfo !== null) {
        this.setState({
          liked: true,
          albumLikeInfo: this.props.albumLikeInfo
        });
      }
    }
    
    if (this.props.shuffling && this.props.shuffling !== prevProps.shuffling) {
      let randomPlaylist = this.props.albumSongs
      if (this.props.shuffling === true) {
        for(let i = this.props.albumSongs.length - 1; i > 0; i--) {
          let orig = randomPlaylist[i]
          let j = Math.floor(Math.random() * i)
          randomPlaylist[i] = randomPlaylist[j]
          randomPlaylist[j] = orig
        }
        this.setState({
          albumSongs: randomPlaylist
        })
      } else {
        this.setState({
          albumSongs: this.props.albumSongs
        })
      }
    }

    if (this.props.playing && this.props.playing !== prevProps.playing) {
      if (this.props.playing === true) {
        this.setState({
          playing: true
        })
      } else {
        this.setState({
          playing: false
        })
      }
    }

    if (this.props.currentPlaylist && this.props.currentPlaylist !== prevProps.currentPlaylist) {
      if (this.props.currentPlaylist.length >= 1) {
        if (this.props.currentPlaylist === this.props.albumSongs) {
          this.setState({
            playing: true
          })
        } else {
          this.setState({
            playing: false
          })
        }
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
    if (this.state.albumLikeInfo && this.state.liked === true) {
      this.props.destroyLike(this.state.albumLikeInfo.id)
        .then(() => this.setState({
          liked: false,
          albumLikeInfo: null
        }))
    } else {
      this.props.createLike({ likeable_id: this.props.album.id, likeable_type: "Album" })
        .then(() => {
          this.props.fetchLikes()
            .then((result) => {
              Object.values(result.likes).map((like) => {
                if ((like.likeable_id === this.props.album.id) && (like.liker_id === this.props.userId)) {
                  this.setState({
                    liked: true,
                    albumLikeInfo: like
                  })
                }
              })
            })
        })
    }

  }
  
  handleQueue(songId, allSongs) {

    if (allSongs && songId) {
      // SETS PREV & NEXT SONG IDS
      for (let i = 0; i < allSongs.length; i++) {
        if (allSongs[i].id === songId) {
          if (allSongs[i - 1] === undefined || allSongs[i - 1] === null) {
            this.props.setPrevSong(null)
          } else {
            this.props.setPrevSong(allSongs[i - 1].id)
          }
          if (allSongs[i + 1] === undefined || allSongs[i + 1] === null) {
            this.props.setNextSong(null)
          } else {
            this.props.setNextSong(allSongs[i + 1].id)
          }
        }
      }
      // SETS CURRENT PLAYLIST
      this.props.setCurrentPlaylist(allSongs)
    }

    // SETS CURRENT SONG
    this.props.playSong();
    this.props.setCurrentSong(songId);
    this.props.changeCurrentSong(songId);
    this.setState({
      playing: true
    })
  }
  
  render() {
    if (!this.props.album || !this.props.albumSongs) {
      return null
    }

    const greenButton = this.state.playing === true ? <PauseCircleFilledIcon id='greenButton' /> : <PlayCircleFilledIcon id='greenButton' />
    const label = this.state.albumLikeInfo ? <FavoriteIcon style={{ fontSize: 40 }} /> : <FavoriteBorderIcon style={{ fontSize: 40 }} />

    return (
      <div className='playlist-container'>
        <div className='item-play-like'>
          <div className="greenButton-container" onClick={() => {
            if (this.props.albumSongs) {
              this.props.albumSongs.forEach((song) => {
                if (song.id === this.props.currentSongId) {
                  this.props.playSong()
                  this.setState({
                    playing: true
                  })
                  this.handleQueue(this.props.currentSongId, this.props.currentPlaylist)
                } else {
                  this.props.pauseSong()
                  this.setState({
                    playing: false
                  })
                  this.handleQueue(this.state.albumSongs[0].id, this.state.albumSongs);
                }
              })
            }
            this.handlePlay();
          }}>
            {greenButton}
          </div>
        <div className="likeButton" onClick={this.handleLike}>{label}</div>
        </div>
        <div className='playlist-header'>
          <div className="playlist-left-other">
            <h1 className='playlist-item-count-other'>#</h1>
            <div className='playlist-left-title-name-other'>
              <h1>TITLE</h1>
            </div>
          </div>
          <i id='playlist-item-time-icon' className='far'>&#xf017;</i>
        </div>
        <hr className='line-separator'></hr>
        <ul className='playlist'>
          {this.props.albumSongs.map((song, count) => {
            return (
              <li className='playlist-item' key={song.id} onClick={() => this.handleQueue(song.id, this.state.albumSongs)}>
                <div className='playlist-left-other'>
                  <p className='playlist-item-count-other'>{count}</p>
                  <div className='playlist-left-title-name-other'>
                    <h1>{song.song_title}</h1>
                    <h1>{this.props.artistName}</h1>
                  </div>
                </div>
                <h1 className='playlist-item-time'>{song.total_song_time}</h1>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default AlbumShowPlaylist