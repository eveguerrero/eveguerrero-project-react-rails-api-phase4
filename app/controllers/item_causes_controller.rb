class ItemCausesController < ApplicationController
    def index 
        render json: ItemCause.all
    end

    def show 
        item_cause = ItemCause.find(params[:id])
        render json: item_cause, status: :ok
    end

    def create
        item_cause = ItemCause.create!(item_causes_params)
        render json: item, status: :created
    end

    def destroy
        item_cause = ItemCause.find(params[:id])
        head :no_content
    end

    private

    def item_causes_params
        params.permit(:item_id,:cause_id)
    end
end
