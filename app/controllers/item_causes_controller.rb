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
        render json: item_cause.item, status: :created
    end

    def destroy
        item_cause = ItemCause.find_by(item_id: params[:item_id],cause_id: params[:cause_id])
        item = item_cause.item
        item_cause.destroy
        render json: item, status: :ok
    end

    private

    def item_causes_params
        params.permit(:item_id,:cause_id)
    end
end
