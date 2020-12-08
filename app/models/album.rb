class Album < ApplicationRecord
  belongs_to :artist, 
    foreign_key: :artist_id,
    class_name: :Artist

  has_many :songs,
    foreign_key: :album_id,
    class_name: :Song
end
