Rails.application.routes.draw do

  resources :order_products
  resources :orders
  resources :migrations
  resources :question_from_customers
  resources :carts
  resources :profiles
  resources :reviews
  resources :products
  resources :customers
  resources :stores
  resources :owners
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
