json.extract! @artist, :id, :artist_name, :albums, :songs
json.artistPhotoUrl url_for(@artist.artistPhotoUrl)

# json.albums @artist.albums do |album|
#   # if album.albumPhotoUrl.attached?
#     json.set! album.id do
#       json.id album.id
#       json.album_title album.album_title
#       json.albumPhotoUrl url_for(album.albumPhotoUrl)
#       json.songs album.songs do |song|
#         json.set! song.id do
#           json.id song.id
#           json.song_title song.song_title
#           json.songUrl url_for(song.songUrl)
#           json.total_song_time song.total_song_time
#         end
#       end
#     end
#   # end
# end

# json.songs @artist.songs do |song|
#   # if song.songUrl.attached?    
#     json.set! song.id do
#       json.id song.id
#       json.song_title song.song_title
#       json.songUrl url_for(song.songUrl)
#       json.total_song_time song.total_song_time
#       json.albumPhotoUrl url_for(song.albumPhotoUrl)
#       json.album_id song.album.id
#       json.album_title song.album.album_title
#     end
#   # end
# end
