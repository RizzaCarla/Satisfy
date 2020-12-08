# == Schema Information
#
# Table name: main_playlists
#
#  id            :bigint           not null, primary key
#  total_count   :integer          not null
#  playlist_name :integer          not null
#  author_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'test_helper'

class MainPlaylistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
