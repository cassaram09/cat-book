class CatsController < ApplicationController
  
  def index
    @cats = Cat.all
    render json: @cats
  end

  def create
    @cat = Cat.new(cat_params)
    if @cat.save()
      render json: @cat
    end
  end

  def show
    @cat = Cat.find(params[:id])
    render json: @cat
  end

  def update
    @cat = Cat.find(cat_params[:id])
    if @cat.update(cat_params)
      render json: @cat
    end
  end

  private
  def cat_params
    params.require(:cat).permit(:id, :name, :age, :weight, :breed, :temperament, hobby_ids: [])
  end

end
