Rails.application.routes.draw do
  # See how all your routes lay out with "rake routes".
  root 'application#index'

  namespace :api do
    resources :submissions, only: [:create, :show, :index] do
      resources :offers, only: [:index]
    end

    resources :lenders, only: [:index, :show] do
      resources :products, only: [:index, :show]
    end
  end
end
