class Api::SongsController < ApplicationController

  def show
    @song = Song.find_by(id: params[:id])
    if @song
        render :show
    else
        render {'Song was not found'}
    end
  end

  def index
    if (params[:songTitle])
      args = params[:songTitle].split(" ")
      @songs = []
      args.each do |arg|
        @songs.concat(Song.where("lower(song_title) LIKE ?", "%#{arg.downcase}%"))
      end
    else
      @songs = Song.all
    end
    render :index
  end
end
