class ApplicationController < ActionController::API
  before_action :authenticate 

  # check if the current user is logged in
  def logged_in?
    !!current_user
  end

  # set our current user
  def current_user
    if auth_present?
      user = User.find(auth["user"])
      if user
        @current_user ||= user
      end
    end
  end

  # reutrn an error unless the user is already logged in
  def authenticate
    render json: {error: "unauthorized"}, status: 401 unless logged_in?
  end

  private

  # get token from from the headers of the request
  def token
    request.env["HTTP_AUTHORIZATION"].scan(/Bearer(.*$)/).flatten.last
  end

  # JWT decode the token, to return the right user
  def auth
    Auth.decode(token)
  end

  #check if a auth key is present in headers
  def auth_present?
    !!request.env.fetch("HTTP_AUTHORIZATION", "").scan(/Bearer/).flatten.first
  end
end
