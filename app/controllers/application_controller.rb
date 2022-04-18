class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize_user
  
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response 
  
  # To Confirm Current User via Session
  def current_user
      User.find(session[:current_user])
  end
  # Return JSON error message of "Not Authorized" unless current_user is 'true' (authorized).  
  def authorize_user
      return render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
  end
  # Return JSON error message of "Not Authorized" unless current_user.seller is 'true'
  def is_seller
      return render json: { error: "Not Authorized as a seller" }, status: :unauthorized unless current_user.seller
  end
  
  private

  def render_not_found_response(error)
    render json: {error:"#{error.model} not found"}, status: :not_found
  end

  def render_invalid_response 
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
