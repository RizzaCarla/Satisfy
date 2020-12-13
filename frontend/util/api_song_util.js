export const fetchSongs = () => (
  $.ajax({
    url: '/api/songs'
  })
)

export const fetchSong = id => (
  $.ajax({
    url: `/api/songs/${id}`
  })
)