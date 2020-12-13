require 'test_helper'

class SongsControllerTest < ActionDispatch::IntegrationTest
  test "should get Show" do
    get songs_Show_url
    assert_response :success
  end

end
