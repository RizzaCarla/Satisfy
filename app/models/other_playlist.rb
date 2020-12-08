class OtherPlaylist < ApplicationRecord
  belongs_to :other_playlist_owner,
    foreign_key: :author_id,
    class_name: :User

  has_many :main_playlist_likes,
    foreign_key: :other_playlist_id,
    class_name: :OtherPlaylistLike

  has_many :songs,
    through: :main_playlist_likes,
    source: :Song
end
