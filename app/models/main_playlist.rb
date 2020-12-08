class MainPlaylist < ApplicationRecord
  belongs_to :main_playlist_owner,
    foreign_key: :author_id,
    class_name: :User

  has_many :main_playlist_likes,
    foreign_key: :main_playlist_id,
    class_name: :MainPlaylistLike
  
  has_many :songs,
    through: :main_playlist_likes,
    source: :Song  
end
