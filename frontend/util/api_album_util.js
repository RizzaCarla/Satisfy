export const fetchAlbums = () => (
  $.ajax({
    url: 'api/albums',
    method: 'GET'
  })
)

export const fetchAlbum = id => (
  $.ajax({
    url: `api/albums/${id}`,
    method: 'GET'
  })
)

export const searchAlbums = albumTitle => {
  return $.ajax({
    url: 'api/albums',
    method: 'GET',
    data: { albumTitle }
  })
}