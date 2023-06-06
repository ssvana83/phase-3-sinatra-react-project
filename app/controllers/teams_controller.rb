class TeamsController < ApplicationController
  set :default_content_type, 'application/json'


  # Teams Index Route; READ
  get "/teams" do
    teams = Team.all.order(:created_at)
    teams.to_json(include: :players)
  end
  
  

end