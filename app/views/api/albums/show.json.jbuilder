json.extract! @album, :id, :album_title, :artist_id
json.photoUrl url_for(@album.photoUrl)
