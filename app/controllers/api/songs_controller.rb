class Api::SongsController < ApplicationController
  # def show
  #   begin
  #     @song = Song.find_by(id: params[:id])
  #     render :show
  #   rescue
  #     puts 'you messed up'
  #   end
  # end
  
  def show
    @song = Song.find_by(id: params[:id])
    if @song
        render :show
    else
        render {'you messed up'}
    end
  end

  def index
    @songs = Song.all
    render :index
  end
end
