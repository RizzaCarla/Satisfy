class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:index, :show, :update]

  def index
    @users = User.all
    if @users
      render :index
    else
      render {'No users in the database'}
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render {"User was not found"}
    end
  end

  def create 
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update
      render :index
    else
      render json: ["Unable to update user"], status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
