# == Schema Information
#
# Table name: artists
#
#  id          :bigint           not null, primary key
#  artist_name :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Artist < ApplicationRecord
  has_many :albums,
    foreign_key: :artist_id,
    class_name: :Album,
    inverse_of: :artist

  has_many :songs,
    through: :albums,
    source: :songs
    
  has_many :likes, 
    as: :likeable,
    dependent: :destroy

  has_one_attached :artistPhotoUrl
end
