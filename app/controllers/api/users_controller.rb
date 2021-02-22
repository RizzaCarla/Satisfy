class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:update, :destroy, :show]

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render "/api/users/show"
    else
      render {'User was not found'}
    end
  end

  def create 
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update
      render json: "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
