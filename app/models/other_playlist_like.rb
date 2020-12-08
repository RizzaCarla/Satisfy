# == Schema Information
#
# Table name: other_playlist_likes
#
#  id                  :bigint           not null, primary key
#  other_liked_song_id :integer          not null
#  other_playlist_id   :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class OtherPlaylistLike < ApplicationRecord
  belongs_to :other_liked_song,
    foreign_key: :other_liked_song_id,
    class_name: :Song

  belongs_to :other_playlist,
    foreign_key: :other_playlist_id,
    class_name: :OtherPlaylist
end
