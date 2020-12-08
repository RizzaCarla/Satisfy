class Song < ApplicationRecord
  belongs_to :album, 
    foreign_key: :album_id,
    class_name: :Album
    
  has_many :other_playlists,
    foreign_key: :other_liked_song_id,
    class_name: :OtherPlaylistLike
end
