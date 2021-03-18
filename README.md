# README

# Satisfy your music cravings... Get Satisfied

![logo](https://satisfy-seed.s3-us-west-1.amazonaws.com/images/Satisfy-Final-Logo.png)

[Satisfy Live Link](https://satisfy-your-music-cravings.herokuapp.com/#/us)

## Overview

**Homepage**
![satisfy2](https://user-images.githubusercontent.com/44996285/111621317-1664f200-87a5-11eb-8d4d-9ed741081bf5.JPG)
**Login**
![satisfylogin](https://user-images.githubusercontent.com/44996285/111621447-3e545580-87a5-11eb-8ae3-ffabf0756f05.JPG)
**Signup**
![satisfysignup](https://user-images.githubusercontent.com/44996285/111621556-5c21ba80-87a5-11eb-87d2-c3bc49a07186.JPG)
**Search**
![satisfysearch](https://user-images.githubusercontent.com/44996285/111621652-79568900-87a5-11eb-9ec8-af575595b061.JPG)
**Discover**
![satisfydiscover](https://user-images.githubusercontent.com/44996285/111621801-a2771980-87a5-11eb-8c92-ed361ff527b4.JPG)
**Liked Songs**
![satisfylikedsongs](https://user-images.githubusercontent.com/44996285/111621862-b3c02600-87a5-11eb-991a-a32cfbc67f3b.JPG)
**Liked Albums**
![satisfylikedalbums](https://user-images.githubusercontent.com/44996285/111621928-cc304080-87a5-11eb-826e-2418d09a7918.JPG)
**Followed Artists**
![satisfyfollowedartists](https://user-images.githubusercontent.com/44996285/111622016-ecf89600-87a5-11eb-93ff-26466fa38fb7.JPG)
**Music Player**
![satisfymusicplayer](https://user-images.githubusercontent.com/44996285/111622222-24ffd900-87a6-11eb-9100-af95ffaea827.JPG)
## Technologies
* Ruby & Rails version
  - Ruby 2.5.1
  - Ruby on Rails 5.2.4.4
* System dependencies
  - `webpack`
  - `webpack-cli`
  - `react`
  - `react-dom`
  - `react-router-dom`
  - `redux`
  - `react-redux`
  - `@babel/core`
  - `@babel/preset-react`
  - `@babel/preset-env`
  - `babel-loader`
* Setup Instructions
  - `Bundle install`
  - `npm install`
* Database creation & initialization
  - `Bundle Exec Rails db:reset db:setup db:migrate`
* Deployment instructions
  - Setup Heroku.
  - `git push Heroku main/master`
  - `heroku run bundle exec rails db:migrate`
  - `heroku run bundle exec rails db:seed`
* Features
  - Search Songs, Artists, Albums
  - Users can signup and login or use the demo account
  - Users can play, pause, repeat a song, shuffle a playlist, go to the next or previous song, toggle or change the volume, and change the song's current time in music player.
  - Like songs/albums & follow artists
  - Users can view their liked songs, liked albums, and followed artists.
  - User can discover new songs, albums, artists
* Technical Challenges
  1. Create a queue for the specific page. A queue was essential for incorporating a next and previous buttong, the liked songs page, the liked albums page and the followed artist page, which had a playlist of their respective songs. A queue was also crucial for shuffling, since I needed to have access to the backend. The play button had to only be on pause if user is in the correct page. If not, play button had to be on play. 
  2. Like categories and have it reflect real-time on the page. It has to persist if user leaves the page. 
  3. Understanding React-Redux fully to correctly pass in data needed to the components.
  4. Understanding the component cycle, and ensuring that components update without causing an infinite loop.
  5. Setting up AWS, so that the photos and songs were saved.
  6. The music player needed to be continuous, and the data used by the music player had to be taken from the global slice of state.
* Highlights
  - Implementing the music player brought the app to life. It provided the main function that users look for in a Spotify clone. In fact, a few testers have used the app to listen to my music.
