class Api::SongsController < ApplicationController
  def show
    @song = Song.with_attached_song.find_by(id: params[:id])
    render json: "/api/users/show"
  end

  def index
    @songs = Songs.all
    render json: "/api/users/index"
  end
end
