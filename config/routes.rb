Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  

  resources :causes, only: [:index, :show]
  resources :item_causes, only: [:index, :show, :create, :destroy]
  resources :items

  # Login / Logout Routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

end
