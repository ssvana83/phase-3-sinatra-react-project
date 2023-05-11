class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  # only having this just returns this first message/the last line. adding this below will then 

  get "/players" do
    players = Player.all.order(:created_at)
    players.to_json
  end

end
