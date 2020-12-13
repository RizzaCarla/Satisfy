class Api::SongsController < ApplicationController
  def show
    @song = Song.find_by(id: params[:id])
    render json: "api/songs/show"
  end

  def index
    @songs = Songs.all
    render json: "api/songs/index"
  end
end
