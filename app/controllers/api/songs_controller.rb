class Api::SongsController < ApplicationController
  def show
    @song = Song.with_attached_songUrl.find_by(id: params[:id])
    render :show
  end

  def index
    @songs = Song.all
    render :index
  end
end
