json.extract! @song, :id, :song_title, :total_song_time, :album_id, :artist, :album
json.albumPhotoUrl url_for(@song.albumPhotoUrl)
json.artistPhotoUrl url_for(@song.artistPhotoUrl)
json.songUrl url_for(@song.songUrl)