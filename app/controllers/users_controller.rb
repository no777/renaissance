Canvas.client.token = 'RM14FSnQXEoDW9J03IWh1n1hKPbs6nH5PSXgMXzatzwOGAasbTFtqW5MzOsG6fOT'
Canvas.client.url = 'http://192.168.1.115:3000'
# Canvas.client.account = '200'

class UsersController < ApplicationController
  before_filter :authenticate_user!

  def index
    @courses = Canvas.client.get 'courses'
    logger.debug "courses: #{@courses}" 
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    unless @user == current_user
      redirect_to :back, :alert => "Access denied."
    end
  end

end
