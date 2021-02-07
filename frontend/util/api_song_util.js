export const fetchSongs = () => (
  $.ajax({
    url: '/api/songs',
    method: 'GET'
  })
)
  
  export const fetchSong = id => (
    $.ajax({
      url: `/api/songs/${id}`,
      method: 'GET'
  })
)


export const searchSongs = songTitle => {
  return $.ajax({
    url: 'api/songs',
    method: 'GET',
    data: { songTitle }
  })
}