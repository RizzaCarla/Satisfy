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
require 'test_helper'

class MainPlaylistLikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
