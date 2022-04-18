class CausesController < ApplicationController
    def index 
        render json: Cause.all
    end

    def show 
        cause = Cause.find(params[:id])
        render json: cause, status: :ok
    end
end
