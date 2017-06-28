Rails.application.routes.draw do

  scope '/api/v1' do
    resources :hobbies
    resources :cats
  end

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

end
