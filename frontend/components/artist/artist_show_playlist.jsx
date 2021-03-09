import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

class ArtistShowPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      shuffling: false,
      playing: this.props.playing,
      artistSongs: this.props.artistSongs,
      artistLikeInfo: this.props.artistLikeInfo,
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleQueue = this.handleQueue.bind(this);
  }

  componentDidMount() {
    if (this.props.artistLikeInfo !== null) {
      this.setState({
        liked: true,
        artistLikeInfo: this.props.artistLikeInfo
      });
    }

    // console.log(this.props.artistSongs)
    
    if (this.props.artistSongs) {
      this.props.artistSongs.forEach((song) => {
        if (song.id === this.props.currentSongId) {
          this.props.playSong()
          this.setState({
            playing: true
          })
          audio.play()
          this.handleQueue(this.props.currentSongId, this.props.currentPlaylist)
        } else {
          this.props.pauseSong()
          this.setState({
            playing: false
          })
          audio.pause()
        }
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.artistLikeInfo && this.props.artistLikeInfo != prevProps.artistLikeInfo) {
      if (this.props.artistLikeInfo !== null) {
        this.setState({
          liked: true,
          artistLikeInfo: this.props.artistLikeInfo
        });
      }
    }

    if (this.props.shuffling && this.props.shuffling !== prevProps.shuffling) {
      let randomPlaylist = this.props.artistSongs
      if (this.props.shuffling === true) {
        for (let i = this.props.artistSongs.length - 1; i > 0; i--) {
          let orig = randomPlaylist[i]
          let j = Math.floor(Math.random() * i)
          randomPlaylist[i] = randomPlaylist[j]
          randomPlaylist[j] = orig
        }
        this.setState({
          artistSongs: randomPlaylist
        })
      } else {
        this.setState({
          artistSongs: this.props.artistSongs
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
  }

  handlePlay() {
    const audio = document.getElementById('audio')
    if (this.state.playing && audio.played) {
      this.props.pauseSong()
      this.setState({
        playing: false
      })
      audio.pause()
    } else {
      this.props.playSong()
      this.setState({
        playing: true
      })
      audio.play()
    }
  }

  handleLike() {
    if (this.state.artistLikeInfo && this.state.liked === true) {
      this.props.destroyLike(this.state.artistLikeInfo.id)
        .then(() => this.setState({
          liked: false,
          artistLikeInfo: null
        }))
    } else {
      this.props.createLike({ likeable_id: this.props.artist.id, likeable_type: "Artist" })
        .then(() => {
          this.props.fetchLikes()
            .then((result) => {
              Object.values(result.likes).map((like) => {
                if ((like.likeable_id === this.props.artist.id) && (like.liker_id === this.props.userId)) {
                  this.setState({
                    liked: true,
                    artistLikeInfo: like
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
    if (!this.props.artist || !this.props.artistSongs) {
      return null
    }

    // let greenButton
    // if (this.props.playing === true) {
    //   this.props.artistSongs.forEach((song) => {
    //     if (song === this.props.currentSongId) {
    //       console.log('YOU CHANGED ARTISTS')
    //       greenButton = <PauseCircleFilledIcon id='greenButton'/>
    //     } else {
    //       greenButton = <PlayCircleFilledIcon id='greenButton'/>
    //     }
    //   })
    // } else { 
    //   greenButton = <PlayCircleFilledIcon id='greenButton'/>
    // }
    const greenButton = this.props.playing === true ? <PauseCircleFilledIcon id='greenButton' /> : <PlayCircleFilledIcon id='greenButton' />
    const label = this.state.artistLikeInfo ? <button className='followButton'>FOLLOWING</button> : <button className='followButton'>FOLLOW</button>
    
    if (this.props.artistSongs !== undefined) {  
      return (
        <div className='playlist-container'>
          <div className='item-play-like'>
            <div className="greenButton-container" onClick={() => {
              if (this.props.artistSongs) {
                this.props.artistSongs.forEach((song) => {
                  if (song.id === this.props.currentSongId) {
                    this.props.playSong()
                    this.setState({
                      playing: true
                    })
                    audio.play()
                    this.handleQueue(this.props.currentSongId, this.props.currentPlaylist)
                  } else {
                    this.props.pauseSong()
                    this.setState({
                      playing: false
                    })
                    audio.pause()
                    this.handleQueue(this.state.artistSongs[0].id, this.state.artistSongs);
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
            <p>SONGS</p>
          </div>
          <ul className='playlist'>
            {
              this.props.artistSongs.map((song, count) => {
                return(
                  <li className='playlist-item' key={song.id} onClick={() => this.handleQueue(song.id, this.state.artistSongs)}>
                    <div className='playlist-left'>
                      <p className='playlist-item-count'>{count}</p>
                      <img className='playlist-item-photo' src={this.props.albums[song.album_id].albumPhotoUrl}></img>
                      <div className='playlist-left-title-name'>
                        <h1>{song.song_title}</h1>
                        <h1>{this.props.artistName}</h1>
                      </div>
                    </div>
                    <h1 className='playlist-item-time'>{song.total_song_time}</h1>
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
    } else {
      return null
    }
  } 
}

export default ArtistShowPlaylist