import React from 'react';
import { withRouter } from 'react-router';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      songLikeInfo: this.props.songLikeInfo,
      repeating: false,
      muted: false
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleLoop = this.handleLoop.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongs()
    if (this.props.songLikeInfo !== null) {
      this.setState({
        liked: true,
        songLikeInfo: this.props.songLikeInfo
      });
    }
    if (this.props.repeating === true) {
      this.setState({
        repeating: true
      })
    } else {
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
        this.setState({
          repeating: true
        })
      } else {
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
  }

  handlePlay() {
    const audio = document.getElementById('audio')
    const pButton = document.getElementById('pButton')
     if (audio.paused) {
      audio.play()
      pButton.innerHTML = '&#xe035;';
      if (this.props.currentSongId === this.props.songId) {
        greenButton.innerHTML = '&#xe035;';
      }
    } else {
      audio.pause()
      pButton.innerHTML = '&#xe038;';
      if (this.props.currentSongId === this.props.songId) {
        greenButton.innerHTML = '&#xe038;';
      }
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
    const audio = document.getElementById('audio')
    const myRange = document.getElementById('myRange')
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
    const audio = document.getElementById('audio')
    const myRange = document.getElementById('myRange')

    const clickPosition = (e.pageX - myRange.offsetLeft) / myRange.offsetWidth;
    const clickTime = clickPosition * audio.duration;

    // move the playhead to the correct position
    audio.currentTime = clickTime;
    myRange.value = audio.currentTime
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
      audio.volume = 0;
      myVolume.value = 100
      this.props.muteSong(false)
      this.setState({
        muted: false
      })
    } else if ((clickPosition <= 0) || (audio.muted === false)) {
      audio.muted = true
      audio.volume = 1;
      myVolume.value = 0
      this.props.muteSong(true)
      this.setState({
        muted: true
      })
    }
  }
  
  render() {

    let volumeLabel
    if (this.state.muted === true) {
      volumeLabel = <VolumeOffIcon id='volumeButton' style={{ fontSize: 25 }} />
    } else if (this.state.muted === false) {
      volumeLabel = <VolumeUpIcon id='volumeButton' style={{ fontSize: 25 }} />
    } else if (this.state.muted === null) {
      volumeLabel = <VolumeDownIcon id='volumeButton' style={{ fontSize: 25 }} />
    }

    // const likeLabel = this.state.songLikeInfo ? <FavoriteIcon style={{ fontSize: 40 }} /> : <FavoriteBorderIcon style={{ fontSize: 40 }} />

    if (this.props.location.pathname !== "/us") {
      if (this.props.songId !== null && this.props.song !== null) {
        const audio = document.getElementById('audio')
        if (audio !== null) {
          {this.handleTime()}
        }
        return (
          <div className="musicPlayer">
            <div className="left-container">
              <img className='music-player-photo' src={this.props.song.artistPhotoUrl} />
              <div>
                <h1>{this.props.song.song_title}</h1>
                <p>{this.props.song.artist.artist_name}</p>
              </div>
               {/* <div className="likeButton" onClick={this.handleLike}>{likeLabel}</div> */}
             </div>
            <div className="middle-container">
              <div className="middle-top-container">
                <div className="shuffleButton-container">
                  <i id='shuffleButton' className="material-icons">&#xe043;</i>
                </div>
                <div className='prevButton-container'>
                  <i id='prevButton' className="material-icons">&#xe045;</i>
                </div>
                <div className='pButton-container'>
                  <i id='pButton' onClick={this.handlePlay} className="material-icons">&#xe038;</i>
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
            <audio id='audio' src={`${this.props.songs[this.props.songId].songUrl}`} type="audio/mp3" preload='metadata' />
          </div>
        )
      } if (this.props.songId === null) {
               return (
          <div className="musicPlayer">
            <div className="left-container">
              {/* <div className="likeButton" onClick={this.handleLike}>{label}</div> */}
            </div>
            <div className="middle-container">              
              <div className="middle-top-container">
                <div className="shuffleButton-container">
                  <i id='shuffleButton' className="material-icons">&#xe043;</i>
                </div>
                <div className='prevButton-container'>
                  <i id='prevButton' className="material-icons">&#xe045;</i>
                </div>
                <div className='pButton-container'>
                  <i id='pButton' onClick={this.handlePlay} className="material-icons">&#xe038;</i>
                </div>
                <div className='nextButton-container'>
                  <i id='nextButton' className="material-icons">&#xe044;</i>
                </div>
                <div className='loopButton-container'>
                    <i id='loopButton' className="material-icons" onClick={this.handleLoop}>&#xe040;</i>
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