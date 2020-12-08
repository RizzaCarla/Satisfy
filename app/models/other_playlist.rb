class OtherPlaylist < ApplicationRecord
  belongs_to :other_playlist_owner,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    foreign_key: :author_id,
    class_name: :OtherPlaylistLike

  has_many :liked_song,
    through: :likes,
    source: :Song
end
