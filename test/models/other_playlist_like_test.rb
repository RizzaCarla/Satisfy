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
require 'test_helper'

class OtherPlaylistLikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
