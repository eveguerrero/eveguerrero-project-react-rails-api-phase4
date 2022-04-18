class SessionsController < ApplicationController
    skip_before_action :authorize_user

    def login
        user = User.find_by(name: params[:username])
        if user&.authenticate(params[:password])
            
            # - Set Session's 'current_user' to User's ID
            # - Set Session's 'login_attempts' to 0
            session[:current_user] = user.id
            session[:login_attempts] = 0
            render json: user, status: :ok
        else

            # - Set Session's 'login_attempts' to 0 if Undefined / Falsey
            # - Increment Session's 'login_attempts' by 1
            if !user
                session[:login_attempts] = 0
            else
                session[:login_attempts] += 1
                render json: { error: "Invalid Password and/or Username" },  status: :unauthorized
            end
        end
    end 

    def logout
        session.delete :current_user
    end 
end
