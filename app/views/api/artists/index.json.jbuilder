@artists.each do |artist|
  if artist.photoUrl.attached?
    json.set! artist.id do
      json.extract! artist, :id, :artist_name
      json.photoUrl url_for(artist.photoUrl)
    end
  end
end