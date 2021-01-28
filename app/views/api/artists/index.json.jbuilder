@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :artist_name
  end
end