import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

class LikedSongsPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      shuffling: false,
      playing: this.props.playing,
      allLikedSongs: this.props.allLikedSongs,
      allSongLikes: this.props.allSongLikes,
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleQueue = this.handleQueue.bind(this);
  }

  componentDidMount() {
    if (this.props.allSongLikes !== null) {
      this.setState({
        allSongLikes: this.props.allSongLikes
      });
    }
    
    if (this.props.allLikedSongs !== null) {
      this.setState({
        allLikedSongs: this.props.allLikedSongs
      });
    }
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.allSongLikes && this.props.allSongLikes != prevProps.allSongLikes) {
      if (this.props.allSongLikes !== null) {
        this.setState({
          allSongLikes: this.props.allSongLikes
        });
      }
    }
    
    if (this.props.allLikedSongs && this.props.allLikedSongs != prevProps.allLikedSongs) {
      if (this.props.allLikedSongs !== null) {
        this.setState({
          allLikedSongs: this.props.allLikedSongs
        });
      }
    }
    
    if (this.props.shuffling && this.props.shuffling !== prevProps.shuffling) {
      let randomPlaylist = this.props.allLikedSongs
      if (this.props.shuffling === true) {
        for (let i = this.props.allLikedSongs.length - 1; i > 0; i--) {
          let orig = randomPlaylist[i]
          let j = Math.floor(Math.random() * i)
          randomPlaylist[i] = randomPlaylist[j]
          randomPlaylist[j] = orig
        }
        this.setState({
          allLikedSongs: randomPlaylist
        })
      } else {
        this.setState({
          allLikedSongs: this.props.allLikedSongs
        })
      }
    }
  }
  
  handlePlay() {
    let audio = document.getElementById('audio')
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
    // if (this.state.allSongLikes && this.state.liked === true) {
      //   this.props.destroyLike(this.state.allSongLikes.id)
      //     .then(() => this.setState({
        //       liked: false,
        //       allSongLikes: null
        //     }))
        // } else {
          //   this.props.createLike({ likeable_id: this.props.song.id, likeable_type: "Song" })
          //     .then(() => {
            //       this.props.fetchLikes()
            //         .then((result) => {
              //           Object.values(result.likes).map((like) => {
                //             if ((like.likeable_id === this.props.song.id) && (like.liker_id === this.props.userId)) {
                  //               this.setState({
                    //                 liked: true,
                    //                 allSongLikes: like
                    //               })
                    //             }
                    //           })
                    //         })
                    //     })
                    // }
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
    
    const greenButton = this.props.playing === true ? <PauseCircleFilledIcon id='greenButton' /> : <PlayCircleFilledIcon id='greenButton' />
    const label = this.state.allSongLikes ? <FavoriteIcon style={{ fontSize: 40 }} /> : <FavoriteBorderIcon style={{ fontSize: 40 }} />
    if (this.props.allLikedSongs && this.props.allSongLikes) {
      
      return (
        <div className='playlist-container'>
          <div className='item-play-like'>
            <div className="greenButton-container" onClick={() => {
              if (this.props.currentPlaylist.length > 0) {
                this.handleQueue(this.props.currentSongId, this.props.currentPlaylist)
              } else {
                this.handleQueue(this.props.allLikedSongs[0].id, this.state.allLikedSongs);
              }
              this.handlePlay();
            }}>
              {greenButton}
            </div>
            {/* <div className="likeButton" onClick={this.handleLike}>{label}</div> */}
          </div>
          <div className='playlist-header'>
            <div className='playlist-left'>
              <h1 className='playlist-item-count'>#</h1>
              <div className='playlist-left-title-name'>
                <h1>TITLE</h1>
              </div>
            </div>
            <h1 className='playlist-item-album-name'>ALBUM</h1>
            <h1 className='playlist-item-date'>DATE ADDED</h1>
            <i id='playlist-item-time-icon' className='far'>&#xf017;</i>
          </div>
          <hr className='line-separator'></hr>
          <ul className='playlist'>
            {this.state.allLikedSongs.map((song, count) => {
              let dateAdded
              this.props.allSongLikes.forEach((like) =>  {
                let months = {
                  "01": "Jan",
                  "02": "Feb",
                  "03": "Mar",
                  "04": "Apr",
                  "05": "May",
                  "06": "Jun",
                  "07": "Jul",
                  "08": "Aug",
                  "09": "Sep",
                  "10": "Oct",
                  "11": "Nov",
                  "12": "Dec"
                }
                if (like.likeable_id === song.id) {
                  dateAdded = like.created_at.split("T")
                  dateAdded = dateAdded[0].split("-")
                  dateAdded = months[dateAdded[1]] + " " + dateAdded[2] + ", " + dateAdded[0]
                }
              })

              return (
                <li className='playlist-item' key={song.id} onClick={() => this.handleQueue(song.id, this.state.allLikedSongs)}>
                  <div className='playlist-left'>
                    <p className='playlist-item-count'>{count}</p>
                    <img className='playlist-item-photo' src={song.albumPhotoUrl}></img>
                    <div className='playlist-left-title-name'>
                      <h1>{song.song_title}</h1>
                      <h1>{song.artist_name}</h1>
                    </div>
                  </div>
                  <h1 className='playlist-item-album-name'>{song.album_title}</h1>
                  <h1 className='playlist-item-date' >{dateAdded}</h1>
                  <h1 className='playlist-item-time'>{song.total_song_time}</h1>
                </li>
              )
            })}
          </ul>
        </div>
      )
    } else {
      return null
    }
  }
}

export default LikedSongsPlaylist