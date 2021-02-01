@albums.each do |album|
  if album.photoUrl.attached?
    json.set! album.id do
      json.extract! album, :id, :album_title, :artist_id
      json.photoUrl url_for(album.photoUrl)
    end
  end
end