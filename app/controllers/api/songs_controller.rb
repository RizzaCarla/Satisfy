class Api::SongsController < ApplicationController
  def show
<<<<<<< Updated upstream
    @song = Song.with_attached_song.find_by(id: params[:id)
    render json: "/api/users/show"
=======
    @song = Song.with_attached_songUrl.find_by(id: params[:id])
    render "/api/songs/show"
>>>>>>> Stashed changes
  end

  def index
    @songs = Song.all
    render "/api/songs/index"
  end
end
