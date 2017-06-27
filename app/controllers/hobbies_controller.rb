class HobbiesController < ApplicationController
  def index
    @hobbies = Hobby.all
    render json: @hobbies
  end

  def show
    @hobby = Hobby.find(params[:id])
    render json: @hobby
  end

  private
  def hobby_params
    params.require(:hobby).permit(:id, :description)
  end
end
