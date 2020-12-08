class MainPlaylistLike < ApplicationRecord
  belongs_to :main_playlist,
    foreign_key: :main_playlist_id,
    class_name: :MainPlaylist
  
  belongs_to :main_liked_song,
    foreign_key: :main_liked_song_id,
    class_name: :Song
end
