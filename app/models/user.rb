class User < ApplicationRecord
  has_one :main_playlist,
    foreign_key: :author_id,
    class_name: :MainPlaylistLike
  
  has_many :other_playlists,
    foreign_key: :author_id,
    class_name: :OtherPlaylist
end
