json.extract! @artist, :id, :artist_name, :albums, :songs
json.artistPhotoUrl url_for(@artist.artistPhotoUrl)