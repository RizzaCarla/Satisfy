# README

#Satisfy your music cravings... Get Satisfied

![logo](https://satisfy-seed.s3-us-west-1.amazonaws.com/images/Satisfy-Final-Logo.png)

[Satisfy Live Link](https://satisfy-your-music-cravings.herokuapp.com/#/us)

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
* Highlights
Implementing the music player brought the app to life. It provided the main function that users look for in a Spotify clone.
