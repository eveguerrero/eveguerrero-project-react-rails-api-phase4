class ItemsController < ApplicationController
    def index 
        render json: Item.all
    end

    def show
        item = Item.find(params[:id])
        render json: item, status: :ok
    end

    def create 
        item = Item.create!(item_params)
        render json: item, status: :created 
        
    # rescue ActiveRecord::RecordInvalid => e
    #     render json: {errors:e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def update
        item = Item.find(params[:id])
        item.update!(item_params)
        render json: item, status: :ok
    end

    def destroy 
        item = Item.find(params[:id])
        item.destroy
    end
    
    private 
    
    def item_params
        params.permit(:name, :price, :category, :image, :description, :gender, :user_id, :condition)
    end
end
