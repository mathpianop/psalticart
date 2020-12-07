Rails.application.routes.draw do
  devise_for :members
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
  
  resources :questions do
    resources :comments
  end

  resources :tones
  resources :members, only: [:show]
end
