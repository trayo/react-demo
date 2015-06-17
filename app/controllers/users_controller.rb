class UsersController < ApplicationController
  respond_to :html, :json

  def index
    respond_with @users = User.all
  end

  def update
    @user = User.find(params[:id])
    respond_with @user.update_attributes(name: params[:name])
  end
end
