Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
    resources :shopping_carts, only: [:index, :show, :create, :update, :destroy]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end

  # resources :products, only: :show
  root to: 'static_pages#root'
end