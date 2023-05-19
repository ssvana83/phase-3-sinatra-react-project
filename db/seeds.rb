puts "🌱 Seeding spices..."

# insert a destroy all code here
# Team.delete_all
# Players.delete_all
# then reseed
# binding.pry
Team.create([
  {
    name: "USWNT",
    country: "United States"
  },
  {
    name: "Liverpool",
    country: "England"
  }
])

Player.create([
  {
    first_name: "Alyssa",
    last_name: "Naeher",
    jersey_number: 1,
    position: "GK",
    team_id: 1
  },
  {
    first_name: "Julie",
    last_name: "Ertz",
    jersey_number: 8,
    position: "midfielder",
    team_id: 1
  },
  {
    first_name: "Alex",
    last_name: "Morgan",
    jersey_number: 13,
    position: "forward",
    team_id: 1
  },
  {
    first_name: "Emily",
    last_name: "Sonnett",
    jersey_number: 14,
    position: "defender",
    team_id: 1
  }
])

puts "✅ Done seeding!"
