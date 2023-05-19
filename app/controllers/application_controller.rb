class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  # Players Index Route; READ
  get "/players" do
    players = Player.all.order(:created_at)
    players.to_json
  end

  # Players Show Route; READ
  get "/players/:id" do
      players = Player.find_by(id: params[:id])
      players.to_json
  end
  

  post "/players" do
    players = Player.create(first_name: params[:first_name], last_name: params[:last_name], jersey_number: params[:jersey_number], position: params[:position], team: params[:team])
    players.to_json
  end

  patch "/players/:id" do
    players = Player.find(params[:id])
    players.update(first_name: params[:first_name])
    players.to_json
  end
  # edit to change one player 

  delete "/players/:id" do
    players = Player.find(params[:id])
    players.destroy
    players.to_json
  end

# Teams Index Route; READ
  get "/teams" do
    teams = Team.all.order(:created_at)
    teams.to_json(include: :players)
  end
  # (include: :players) is what renders nested json

  # Teams Show Route; READ
  get "/teams/:id" do
    teams = Team.find_by(id: params[:id])
    teams.to_json(include: :players)
  end

  # more routes for teams

end
