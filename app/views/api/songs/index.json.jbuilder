@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :song_title, :total_song_time
    json.songUrl url_for(song.songUrl)
  end
end