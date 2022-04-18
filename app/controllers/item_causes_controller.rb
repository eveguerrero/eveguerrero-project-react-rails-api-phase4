class ItemCausesController < ApplicationController
    def index 
        render json: ItemCause.all
    end

    def show 
        item_cause = ItemCause.find(params[:id])
        render json: item_cause, status: :ok
    end
end
