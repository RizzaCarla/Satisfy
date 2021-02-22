require 'test_helper'

class Api::LikesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_likes_show_url
    assert_response :success
  end

  test "should get index" do
    get api_likes_index_url
    assert_response :success
  end

end
