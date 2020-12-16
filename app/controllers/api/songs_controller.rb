class Api::SongsController < ApplicationController
  def show
    @song = Song.with_attached_songUrl.find_by(id: params[:id])
    render "/api/songs/show"
  end

  def index
    @songs = Song.all
    render "/api/songs/index"
  end
end
