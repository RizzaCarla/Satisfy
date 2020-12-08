class OtherPlaylistLike < ApplicationRecord
  belongs_to :other_liked_song,
    foreign_key: :other_liked_song_id,
    class_name: :Song

  belongs_to :other_playlist,
    foreign_key: :other_playlist_id,
    class_name: :OtherPlaylist
end
