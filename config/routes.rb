Rails.application.routes.draw do
  # resources :courses

  resources :courses do
	 
	  collection do
	    get :tag
	  end
	end

  
  root to: 'visitors#index'
  devise_for :users
  resources :users

  get 'courses/canvas/list', to: 'courses#list_canvas_courses'
  get 'courses/import/:id', to: 'courses#import'
  get 'courses/enroll/:id', to: 'courses#enroll_course'


end
