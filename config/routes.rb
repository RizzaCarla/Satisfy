Rails.application.routes.draw do
  namespace :api do
    get 'sessions/create'
    get 'sessions/destroy'
  end
  get 'static_pages/root'
  get 'static/pages'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :index, :show]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root';
end
