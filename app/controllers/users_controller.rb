class UsersController < ApplicationController
    skip_before_action :authorize_user, only: [:create]

    #POST /signup
    def create
        user = User.create!(user_params)
        session[:current_user] = user.id
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def show
        current_user = User.find(session[:current_user])
        render json: current_user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :seller)
    end
end
