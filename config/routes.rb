Rails.application.routes.draw do
  devise_for :members
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
  
  resources :questions do
    resources :comments
  end

  resources :tones, only: [:show, :index]
  resources :members, only: [:show]
  # Provisional
  get '/scales', to: 'scales#index'
  get '/scales/diatonic', to: 'scales#diatonic'
  get 'scales/soft_chromatic', to: 'scales#soft_chromatic'
end
