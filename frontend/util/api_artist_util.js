export const fetchArtists = () => (
  $.ajax({
    url: 'api/artists',
    method: 'GET'
  })
)

export const fetchArtist = id => (
  $.ajax({
    url: `api/artists/${id}`,
    method: 'GET'
  })
)


export const searchArtists = artistName => {
  return $.ajax({
    url: 'api/artists',
    method: 'GET',
    data: { artistName }
  })
}
