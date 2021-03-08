@users.each do |user|
  json.extract! user, :id, :username, :email, :likes

json.liked_songs user.liked_songs do |song|
  if song.songUrl.attached?    
    json.set! song.id do
      json.id song.id
      json.song_title song.song_title
      json.songUrl url_for(song.songUrl)
      json.total_song_time song.total_song_time
      json.albumPhotoUrl url_for(song.albumPhotoUrl)
      json.artistPhotoUrl url_for(song.artistPhotoUrl)
      json.artist_id song.artist.id
      json.artist_name song.artist.artist_name
      json.album_id song.album.id
      json.album_title song.album.album_title
    end
  end
end

json.liked_albums user.liked_albums do |album|
  if album.albumPhotoUrl.attached?    
    json.set! album.id do
      json.id album.id
      json.artist_id album.artist_id
      json.album_title album.album_title
      json.artist_name album.artist.artist_name
      json.albumPhotoUrl url_for(album.albumPhotoUrl)
      json.artistPhotoUrl url_for(album.artistPhotoUrl)
      json.songs album.songs do |song|
        json.set! song.id do
          json.id song.id
          json.song_title song.song_title
          json.songUrl url_for(song.songUrl)
          json.total_song_time song.total_song_time
        end
      end
    end
  end
end

json.liked_artists user.liked_artists do |artist|
  if artist.artistPhotoUrl.attached?
    json.set! artist.id do
      json.id artist.id
      json.artist_name artist.artist_name
      json.artistPhotoUrl url_for(artist.artistPhotoUrl)
    end
  end
end
end