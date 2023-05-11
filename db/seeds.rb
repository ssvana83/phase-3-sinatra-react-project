puts "🌱 Seeding spices..."

Player.create([
  {
    first_name: "Alyssa",
    last_name: "Naeher",
    jersey_number: "1",
    position: "GK",
    team: "USWNT"
  },
  {
    first_name: "Julie",
    last_name: "Ertz",
    jersey_number: "8",
    position: "midfielder",
    team: "USWNT"
  },
  {
    first_name: "Alex",
    last_name: "Morgan",
    jersey_number: "13",
    position: "forward",
    team: "USWNT"
  },
  {
    first_name: "Emily",
    last_name: "Sonnett",
    jersey_number: "14",
    position: "defender",
    team: "USWNT"
  }
])

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

puts "✅ Done seeding!"
