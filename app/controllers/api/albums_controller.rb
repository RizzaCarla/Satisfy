class Api::AlbumsController < ApplicationController
  def show
    @album = Album.find_by(id: params[:id])
    if @album
      render :show
    else
      render {'Album was not found'}
    end
  end

  def index
    if params[:albumTitle]
      args = params[:albumTitle].split(" ")
      @albums = []
      args.each do |arg|
        @albums.concat(Album.where("lower(album_title) LIKE ?", "%#{arg.downcase}%"))
      end
    else
      @albums = Album.all
    end
    render :index
  end
end
