json.extract! @song, :id, :song_title, :total_song_time, :album_id
json.songUrl url_for(@song.songUrl)