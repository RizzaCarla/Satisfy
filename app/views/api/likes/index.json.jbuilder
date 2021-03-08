if @likedSongs
  @likedSongs.each do |song|
    if song.songUrl.attached?
      json.set! song.id do
        json.extract! song, :id, :song_title, :total_song_time, :album_id, :artist, :album
        json.albumPhotoUrl url_for(song.albumPhotoUrl)
        json.artistPhotoUrl url_for(song.artistPhotoUrl)
        json.songUrl url_for(song.songUrl)
      end
    end
  end
elsif @likedAlbums
  @likedAlbums.each do |album|
    if album.albumPhotoUrl.attached?
      json.set! album.id do
        json.extract! album, :id, :album_title, :artist_id, :songs, :artist
        json.albumPhotoUrl url_for(album.albumPhotoUrl)
        json.artistPhotoUrl url_for(album.artistPhotoUrl)
      end
    end
  end
elsif @likedArtists
  @likedArtists.each do |artist|
    if artist.artistPhotoUrl.attached?
      json.set! artist.id do
        json.extract! artist, :id, :artist_name, :albums, :songs
        json.artistPhotoUrl url_for(artist.artistPhotoUrl)
      end
    end
  end
else
  @likes.each do |like|
    json.set! like.id do
      json.extract! like, :id, :liker_id, :likeable_id, :likeable_type, :created_at
    end
  end
end

