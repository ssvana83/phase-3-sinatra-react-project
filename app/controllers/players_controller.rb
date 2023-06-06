class PlayersController < ApplicationController  
  set :default_content_type, 'application/json'
  

  post "/players" do
    team = Team.find(params[:team_id])
    player = team.players.create(
      first_name: params[:first_name], 
      last_name: params[:last_name], 
      jersey_number: params[:jersey_number], 
      position: params[:position]
    )
    player.to_json
  end

  patch "/players/:id" do
    player = Player.find(params[:id])
    player.update(first_name: params[:first_name])
    player.to_json
  end
  # # edit to change one player 

  delete "/players/:id" do
    player = Player.find(params[:id])
    player.destroy
  end



end