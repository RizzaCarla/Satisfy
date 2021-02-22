Rails.application.routes.draw do
  namespace :api do
    get 'likes/show'
    get 'likes/index'
  end
  namespace :api do
    get 'albums/show'
    get 'albums/index'
  end
  namespace :api do
    get 'songs/show'
  end
  get 'songs/Show'
  namespace :api do
    get 'sessions/create'
    get 'sessions/destroy'
  end
  get 'static_pages/root'
  get 'static/pages'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :songs, only: [:show, :index]
    resources :albums, only: [:show, :index]
    resources :artists, only: [:show, :index]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :destroy, :index, :show]
    resources :likes, only: [:create, :update, :destroy, :index, :show]
  end

  root to: 'static_pages#root';
end
