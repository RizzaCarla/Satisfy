class Api::ArtistsController < ApplicationController
  def show
    @artist = Artist.find_by(id: params[:id])
    if @artist
      render :show
    else
        render {'Artist was not found'}
    end
  end

  def index
    if (params[:artistName])
      args = params[:artistName].split(" ")
      @artists = []
      args.each do |arg|
        @artists.concat(Artist.where("lower(artist_name) LIKE ?", "%#{arg.downcase}%"))
      end
    else
      @artists = Artist.all
    end
    render :index
  end
end
