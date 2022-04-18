Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  

  resources :causes, only: [:index, :show]
  resources :item_causes, only: [:index, :show]
  resources :items, only: [:index, :show, :create, :destroy]
  
  

end
