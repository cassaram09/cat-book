class CatsController < ApplicationController
  
  def index
    @cats = Cat.all
    render json: @cats
  end

  def show
    @cat = Cat.find(params[:id])
    render json: @cat
  end

  private
  def cat_params
    params.require(:cat).permit(:id, :name, :age)
  end

end
