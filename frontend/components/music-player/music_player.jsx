import React from 'react';
import { withRouter } from 'react-router';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      songs: this.props.songs,
      muted: this.props.muted,
      playing: this.props.playing,
      repeating: this.props.repeating,
      shuffling: this.props.shuffling,
      prevSongId: this.props.prevSongId,
      nextSongId: this.props.nextSongId,
      songLikeInfo: this.props.songLikeInfo,
      currentSongId: this.props.currentSongId,
      currentPlaylist: this.props.currentPlaylist,
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleLoop = this.handleLoop.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleQueueChange = this.handleQueueChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongs()
    .then(() => this.setState({ songs: this.props.songs}))
    if (this.props.songLikeInfo !== null) {
      this.setState({
        liked: true,
        songLikeInfo: this.props.songLikeInfo
      });
    }
    if (this.props.repeating === true) {
      this.props.repeatSong(true);
      this.setState({
        repeating: true
      })
    } else {
      this.props.repeatSong(false);
      this.setState({
        repeating: false
      })
    }
  }


  componentDidUpdate(prevProps, prevState) {
    const audio = document.getElementById('audio')
    if (this.props.songLikeInfo && this.props.songLikeInfo !== prevProps.songLikeInfo) {
      if (this.props.songLikeInfo !== null) {
        this.setState({
          liked: true,
          songLikeInfo: this.props.songLikeInfo
        });
      }
    }
    if (this.props.repeating && this.props.repeating !== prevProps.repeating) {
      if (this.props.repeating === true) {
        this.props.repeatSong(true);
        this.setState({
          repeating: true
        })
      } else {
        this.props.repeatSong(false);
        this.setState({
          repeating: false
        })
      }
    }

    if (this.props.muted && this.props.muted !== prevProps.muted) {
      if (this.props.muted === true) {
        this.setState({
          muted: true
        })
      } else if (this.props.muted === null) {
        this.setState({
          muted: null
        })
      } else {
        this.setState({
          muted: false
        })
      }
    }

    if (this.props.shuffling && this.props.shuffling !== prevProps.shuffling) {
      if (this.props.shuffling === true) {
        this.setState({
          shuffling: true
        })
      } else {
        this.setState({
          shuffling: false
        })
      }
    }

    if (this.props.playing && this.props.playing !== prevProps.playing) {
      if (this.props.playing === true) {
        audio.play()
        this.setState({
          playing: true
        })
        this.props.playSong()
      } else {
        audio.pause()
        this.setState({
          playing: false
        })
        this.props.pauseSong()
      }
    }

    if (this.props.prevSongId && this.props.prevSongId !== prevProps.prevSongId) {
      this.setState({
        prevSongId: this.props.prevSongId,
      })
    } 

    if (this.props.currentSongId && this.props.currentSongId !== prevProps.currentSongId) {
      this.setState({
        currentSongId: this.props.currentSongId,
      })
      audio.play()
    }

    if (this.props.nextSongId && this.props.nextSongId !== prevProps.nextSongId) {
      this.setState({
        nextSongId: this.props.nextSongId,
      })
    } 

    if (this.props.currentPlaylist && this.props.currentPlaylist !== prevProps.currentPlaylist) {
      this.setState({
        currentPlaylist: this.props.currentPlaylist,
      })
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
    if (this.state.songLikeInfo && this.state.liked === true) {
      this.props.destroyLike(this.state.songLikeInfo.id)
        .then(() => this.setState({
          liked: false,
          songLikeInfo: null
        }))
    } else {
      this.props.createLike({ likeable_id: this.props.song.id, likeable_type: "Song" })
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

  handleTime() {
    let audio = document.getElementById('audio')
    let myRange = document.getElementById('myRange')
    let audioEndTime = document.getElementById('audioEndTime')
    let audioStartTime = document.getElementById('audioStartTime')
    let durationMinutes
    let durationSeconds
    let currentMinutes
    let currentSeconds

    audio.addEventListener("loadedmetadata", function () {
      myRange.max = audio.duration
      durationMinutes = parseInt(audio.duration / 60)
      durationSeconds = parseInt(audio.duration) - (durationMinutes * 60) 
      if ((durationSeconds < 10) && (durationSeconds >= 0)) {
        durationSeconds = "0" + durationSeconds.toString()
      }
      audioEndTime.innerHTML = `${durationMinutes + ":" + durationSeconds}`
    })
    
    audio.addEventListener("timeupdate", function () {
      myRange.value = audio.currentTime
      currentMinutes = parseInt(audio.currentTime / 60)
      currentSeconds = parseInt(audio.currentTime) - (currentMinutes * 60) 
      if ((currentSeconds < 10) && (currentSeconds >= 0)) {
        currentSeconds = "0" + currentSeconds.toString()
      }
      audioStartTime.innerHTML = `${currentMinutes + ":" + currentSeconds}`
    })
  }

  handleLoop() {
    const audio = document.getElementById('audio')
    let loopButton = document.getElementById('loopButton')
    if (audio.loop === false) {
      this.props.repeatSong(true)
      loopButton.innerHTML = "&#xe041;"
      audio.loop = true;
      this.setState({
        repeating: true
      })
    } else {
      this.props.repeatSong(false)
      loopButton.innerHTML = "&#xe040;"
      audio.loop = false;
      this.setState({
        repeating: false
      })
    }
  }

  handleSeek(e) {
    let audio = document.getElementById('audio')
    let myRange = document.getElementById('myRange')

    let clickPosition = (e.pageX - myRange.offsetLeft) / myRange.offsetWidth;
    let clickTime = clickPosition * audio.duration;

    // move the playhead to the correct position
    audio.currentTime = clickTime;
    myRange.value = audio.currentTime
  }

  handleShuffle() {
    let shuffleDot = document.getElementById("shuffleDot")
    if (this.props.shuffling === false) {
      this.props.shuffleSongs(true)
    } else {
      this.props.shuffleSongs(false)
    }
  }
  
  handleVolume(e) {
    const audio = document.getElementById('audio')
    const myVolume = document.getElementById('myVolume')
    const clickPosition = (e.pageX - myVolume.offsetLeft) / myVolume.offsetWidth;

    // move the playhead to the correct position
    if ((clickPosition > 0) && (clickPosition < 1) ) {
      audio.volume = clickPosition;
      myVolume.value = clickPosition * 100
      this.props.muteSong(null)
      this.setState({
        muted: null
      })
      
    } else if ((clickPosition >= 1) || (audio.muted === true)) {
      audio.muted = false
      audio.volume = 1;
      myVolume.value = 100
      this.props.muteSong(false)
      this.setState({
        muted: false
      })
    } else if ((clickPosition <= 0) || (audio.muted === false)) {
      audio.muted = true
      audio.volume = 0;
      myVolume.value = 0
      this.props.muteSong(true)
      this.setState({
        muted: true
      })
    }
  }

  handleQueueChange() {
    if (!this.props.currentSongId) {
      this.props.setPrevSong(null)
    } else {
      this.props.setPrevSong(this.props.currentSongId)
    }

    if (!this.props.nextSongId) {
      this.props.setCurrentSong(null)
      this.props.pauseSong()
      this.setState({
        playing: false
      })
    } else {
      this.props.setCurrentSong(this.props.nextSongId)
      this.props.changeCurrentSong(this.props.nextSongId)
      this.props.playSong()
      this.setState({
        playing: true
      })
    }

    for(let i = 0; i < this.props.currentPlaylist.length; i++) {
      if (this.props.currentPlaylist[i].id === this.props.nextSongId) {
        if (this.props.currentPlaylist[i + 1]) {
          this.props.setNextSong(this.props.currentPlaylist[i+1].id)
        } else {
        }
      }
    }

    if (this.props.currentPlaylist[this.props.currentPlaylist.length - 1].id === this.props.currentSongId) {
      this.props.clearQueue()
    }
  }

  handleNext() {
    // PREV
    if (!this.props.currentSongId) {
    } else {
      if (this.props.nextSongId) {
        this.props.setPrevSong(this.props.currentSongId)
        this.props.playSong()
      } else {
      }
    }

    // CURRENT
    if (!this.props.nextSongId) {
    } else {
      this.props.setCurrentSong(this.props.nextSongId)
      this.props.playSong()
    }

    // NEXT
    if (this.props.currentPlaylist.length) {
      for (let i = 0; i < this.props.currentPlaylist.length; i++) {
        if (this.props.currentPlaylist[i].id === this.props.nextSongId) {
          if (this.props.currentPlaylist[i + 1]) {
            if ((this.props.currentPlaylist[i + 1] === this.props.currentPlaylist[this.props.currentPlaylist.length])) {
            } else {
              this.props.setNextSong(this.props.currentPlaylist[i + 1].id)
              this.props.playSong()
            }
          } else {
            this.props.setNextSong(null)
          }
        }
      }
    }
  }
  
  handlePrev() {
    // PREV
    for (let i = 0; i < this.props.currentPlaylist.length; i++) {
      if (this.props.currentPlaylist[i].id === this.props.prevSongId) {
        if (this.props.currentPlaylist[i - 1]) {
          if ((this.props.currentPlaylist[i - 1] === this.props.currentPlaylist[0])) {
          } else {
            this.props.setPrevSong(this.props.currentPlaylist[i - 1].id)
            this.props.playSong()
          }
        } else {
          this.props.setPrevSong(null)
        }
      }
    }

    // CURRENT
    if (!this.props.prevSongId) {
    } else {
      this.props.setCurrentSong(this.props.prevSongId)
      this.props.playSong()
    }

    // NEXT
    if (!this.props.currentSongId) {
    } else {
      if (this.props.prevSongId) {
        this.props.setNextSong(this.props.currentSongId)
        this.props.playSong()
      } else {
      }
    }
  }

  render() {
    if (this.props.location.pathname === "/signup" || this.props.location.pathname === "/login" || this.props.location.pathname === "/us") {
      return null
    }
    
    // let dot
    // if (this.props.shuffling === true) {
    //   dot = <i className='fas' id='shuffleDot'>&#xf111;</i>
    // } else {
    //   dot = <div></div>
    // }
    // if (this.props.repeating === true) {
    //   dot = <i className='fas' id='loopDot'>&#xf111;</i>
    // } else {
    //   dot = <div></div>
    // }

    const pButton = this.props.playing === true ? <PauseCircleFilledIcon id='pButton' /> : <PlayCircleFilledIcon id='pButton' />

    let volumeLabel
    if (this.state.muted === true) {
      volumeLabel = <VolumeOffIcon id='volumeButton' style={{ fontSize: 25 }} />
    } else if (this.state.muted === false) {
      volumeLabel = <VolumeUpIcon id='volumeButton' style={{ fontSize: 25 }} />
    } else if (this.state.muted === null) {
      volumeLabel = <VolumeDownIcon id='volumeButton' style={{ fontSize: 25 }} />
    }

    let info
    if (this.props.currentSongId) {
      info = <div className="left-container">
                  <img className='music-player-photo' src={this.state.songs[this.props.currentSongId].albumPhotoUrl} />
                  <div>
                    <h1>{this.state.songs[this.props.currentSongId].song_title}</h1>
                    <p>{this.state.songs[this.props.currentSongId].artist.artist_name}</p>
                  </div>
                </div>
    } else {
      info = <div className="left-container"></div>
    }

    let src
    if (this.props.songs[this.props.currentSongId]) {
      src = this.props.songs[this.props.currentSongId].songUrl
    } else {
      src = ''
    }

    if (this.props.currentSongId) {
      if (this.props.songId && this.props.song) {
        const audio = document.getElementById('audio')
        if (audio) {
          {this.handleTime()}
        }
        return (
          <div className="musicPlayer">
            {info}
            <div className="middle-container">
              <div className="middle-top-container">
                <div className="shuffleButton-container" onClick={this.handleShuffle}>
                  <i id='shuffleButton' className="material-icons">&#xe043;</i>
                </div>
                <div className='prevButton-container' onClick={this.handlePrev}>
                  <i id='prevButton' className="material-icons">&#xe045;</i>
                </div>
                <div className='pButton-container' onClick={this.handlePlay}>
                  {pButton}
                </div>
                <div className='nextButton-container' onClick={this.handleNext}>
                  <i id='nextButton' className="material-icons">&#xe044;</i>
                </div>
                <div className='loopButton-container' onClick={this.handleLoop}>
                  <i id='loopButton' className="material-icons">&#xe040;</i>
                </div>
               </div>
               <div className='middle-bottom-container'>
                 <div className="slidecontainer">
                   <p id='audioStartTime'>0:00</p>
                  <input type="range" min="0" max="100" defaultValue="0" className="slider" id="myRange" onClick={this.handleSeek}></input>
                   <p id='audioEndTime'></p>
                 </div>
               </div>
             </div>
            <div className='right-container'>
                <div className='volume-container' onClick={this.handleVolume}>
                  {volumeLabel}
                </div>
                <div className="volume-slidecontainer">
                  <input type="range" min="0" max="100" defaultValue="100" className="slider" id="myVolume" onClick={this.handleVolume}></input>
                </div>
             </div>
            <audio id='audio' src={`${src}`} type="audio/mp3" preload='metadata' onEnded={this.handleQueueChange} />
          </div>
        )
      } else if (!this.props.currentSongId) {
        return (
          <div className="musicPlayer">
            <div className="left-container">
            </div>
            <div className="middle-container">              
              <div className="middle-top-container">
                <div className="shuffleButton-container" onClick={this.handleShuffle}>
                  <i id='shuffleButton' className="material-icons">&#xe043;</i>
                </div>
                <div className='prevButton-container'>
                  <i id='prevButton' className="material-icons">&#xe045;</i>
                </div>
                <div className='pButton-container' onClick={this.handlePlay}>
                  {pButton}
                </div>
                <div className='nextButton-container'>
                  <i id='nextButton' className="material-icons">&#xe044;</i>
                </div>
                <div className='loopButton-container' onClick={this.handleLoop}>
                  <i id='loopButton' className="material-icons">&#xe040;</i>
                </div>
              </div>
              <div className='middle-bottom-container'>
                <div className="slidecontainer">
                  <p id='audioStartTime'>0:00</p>
                  <input type="range" min="0" max="100" defaultValue="0" className="slider" id="myRange" onClick={this.handleSeek}></input>
                  <p id='audioEndTime'></p>
                </div>
              </div>
            </div>
            <div className='right-container'>
              <div className='volume-container' onClick={this.handleVolume}>
                {volumeLabel}
              </div>
              <div className="volume-slidecontainer">
                     <input type="range" min="0" max="100" defaultValue="100" className="slider" id="myVolume" onClick={this.handleVolume}></input>
              </div>
            </div>
            <audio id='audio' src="" type="audio/mp3"/>
          </div>
        )
      }
    } else {
      return null
    }
  }
}


export default withRouter(MusicPlayer);