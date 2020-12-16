# == Schema Information
#
# Table name: songs
#
#  id              :bigint           not null, primary key
#  album_id        :integer          not null
#  song_title      :string           not null
#  total_song_time :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
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

  has_one_attached :songUrl
end
