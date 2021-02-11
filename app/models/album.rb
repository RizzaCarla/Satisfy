# == Schema Information
#
# Table name: albums
#
#  id               :bigint           not null, primary key
#  album_title      :string           not null
#  artist_id        :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Album < ApplicationRecord
  belongs_to :artist, 
    foreign_key: :artist_id,
    class_name: :Artist

  has_many :songs,
    foreign_key: :album_id,
    class_name: :Song

  has_one :artistPhotoUrl,
    through: :artist,
    source: :artistPhotoUrl_attachment

  has_one_attached :albumPhotoUrl
end
