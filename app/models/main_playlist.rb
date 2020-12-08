class MainPlaylist < ApplicationRecord
  belongs_to :main_playlist_owner,
    foreign_key: :author_id,
    class_name: :User
end
