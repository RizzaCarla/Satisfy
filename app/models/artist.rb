class Artist < ApplicationRecord
  has_many :albums,
    foreign_key: :artist_id,
    class_name: :Album
end
