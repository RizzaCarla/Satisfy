# == Schema Information
#
# Table name: other_playlists
#
#  id            :bigint           not null, primary key
#  total_count   :integer          not null
#  playlist_name :integer          not null
#  author_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
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

  has_one_attached :photo
end
