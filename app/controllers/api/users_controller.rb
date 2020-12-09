before_action :require_logged_in, only: [:update, :destroy, :show]
class Api::UsersController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])
    render json: "/api/users/show"
  end

  def create 
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render json: "/api/users/show"
    else
      flash.now[:errors] = @user.errors.full_messages, status: 404
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update
      render json: "/api/users/show"
    else
      flash[:errors] = @user.errors.full_messages, status: 404
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
