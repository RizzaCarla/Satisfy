class Api::LikesController < ApplicationController
  before_action :require_logged_in
  def index
    if params[:userIdForLikedSongs]
      user = User.find_by(id: params[:userIdForLikedSongs])
      @likedSongs = user.liked_songs
    elsif params[:userIdForLikedAlbums]
      user = User.find_by(id: params[:userIdForLikedAlbums])
      @likedAlbums = user.liked_albums
    elsif params[:userIdForLikedArtists]
      user = User.find_by(id: params[:userIdForLikedArtists])
      @likedArtists = user.liked_artists
    else
      @likes = Like.all
    end
  end
  
  def show
    @like = Like.find_by(id: params[:id])
    if @like
      render :show
    else
      render {'Like was not found'}
    end
  end

  def create
    @like = Like.new(like_params)
    @like.liker_id = current_user.id
    if @like.save
      render :show
    else
      render {'Like was not successful'}
    end
  end

  def update
    @like = Like.find_by(id: params[:id])
    if @like.update
      render {"Like successfully updated"}
    else
      render {"Like was not updated"}
    end
  end

  def destroy
    @like = current_user.likes.find_by(id: params[:id])
    if @like
      @like.destroy
      render {"Like was successfully deleted"}
    else
      render {"Like delete was unsuccessful"}
    end
  end

  private
  def like_params
    params.require(:like).permit(:value, :liker_id, :likeable_id, :likeable_type)
  end
end
