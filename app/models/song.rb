class Song < ApplicationRecord
  belongs_to :album, 
    foreign_key: :album_id,
    class_name: :Album
    
  has_many :main_likes,
    foreign_key: :main_liked_song_id,
    class_name: :MainPlaylistLike

  has_many :other_likes,
    foreign_key: :other_liked_song_id,
    class_name: :OtherPlaylist
end
