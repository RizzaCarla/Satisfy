class Api::ArtistsController < ApplicationController
    def show
    @artist = Artist.find_by(id: params[:id])
    render :show
  end

  def index
    @artists = Artist.all
    render :index
  end
end
