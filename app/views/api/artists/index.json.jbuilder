@artists.each do |artist|
  if artist.artistPhotoUrl.attached?
    json.set! artist.id do
      json.extract! artist, :id, :artist_name, :albums, :songs
      json.artistPhotoUrl url_for(artist.artistPhotoUrl)
    end
  end
end