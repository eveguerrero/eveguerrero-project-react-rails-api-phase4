Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  

  resources :causes, only: [:index, :show]
  resources :item_causes, only: [:index, :show]
  resources :items, only: [:index, :show, :create, :destroy]
  resources :users, only: [:create]

  # Login / Logout Routes
  get '/authorize_user', to: 'users#show'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

end
