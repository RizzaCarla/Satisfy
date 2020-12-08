# == Schema Information
#
# Table name: main_playlist_likes
#
#  id                 :bigint           not null, primary key
#  main_liked_song_id :integer          not null
#  main_playlist_id   :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class MainPlaylistLike < ApplicationRecord
  belongs_to :main_playlist,
    foreign_key: :main_playlist_id,
    class_name: :MainPlaylist
  
  belongs_to :main_liked_song,
    foreign_key: :main_liked_song_id,
    class_name: :Song
end
