@songs.each do |song|
  if song.songUrl.attached?
    json.set! song.id do
      json.extract! song, :id, :song_title, :total_song_time, :album_id
      json.songUrl url_for(song.songUrl)
    end
  end
end