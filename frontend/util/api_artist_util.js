export const fetchArtists = () => (
  $.ajax({
    url: 'api/artists',
    method: 'GET'
  })
)

export const fetchArtist = () => (
  $.ajax({
    url: `api/artists/${id}`,
    method: 'GET'
  })
)
