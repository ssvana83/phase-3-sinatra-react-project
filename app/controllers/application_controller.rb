class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  

  # the order of these routes matters **
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  
  post "/player" do
    team = Team.find(params[:team_id])
    player = team.players.create(
      first_name: params[:first_name], 
      last_name: params[:last_name], 
      jersey_number: params[:jersey_number], 
      position: params[:position]
    )
    player.to_json
  end
  

  patch "/player/:id" do
    player = Player.find(params[:id])
    player.update(first_name: params[:first_name])
    player.to_json
  end
  # edit to change one player 

  
  delete "/player/:id" do
    player = Player.find(params[:id])
    player.destroy
  end

# Teams Index Route; READ
  get "/teams" do
    teams = Team.all.order(:created_at)
    teams.to_json(include: :players)
  end
  

  # more routes for teams

end
