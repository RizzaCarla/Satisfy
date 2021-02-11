@albums.each do |album|
  if album.albumPhotoUrl.attached?
    json.set! album.id do
      json.extract! album, :id, :album_title, :artist_id, :songs
      json.albumPhotoUrl url_for(album.albumPhotoUrl)
      json.artistPhotoUrl url_for(album.artistPhotoUrl)
    end
  end
end