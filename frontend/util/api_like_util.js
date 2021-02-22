export const fetchLikedSongs = userIdForLikedSongs => (
  $.ajax({
    url: 'api/likes',
    method: 'GET',
    data: { userIdForLikedSongs }
  })
)

export const fetchLikedAlbums = userIdForLikedAlbums => (
  $.ajax({
    url: 'api/likes',
    method: 'GET',
    data: { userIdForLikedAlbums }
  })
)

export const fetchLikedArtists = userIdForLikedArtists => (
  $.ajax({
    url: 'api/likes',
    method: 'GET',
    data: { userIdForLikedArtists }
  })
)

export const fetchLikes = () => (
  $.ajax({
    url: 'api/likes',
    method: 'GET'
  })
)

export const fetchLike = (likeId) => (
  $.ajax({
    url: `api/likes/${likeId}`,
    method: 'GET'
  })
)

export const createLike = (like) => (
  $.ajax({
    url: "api/likes",
    method: 'POST',
    data: { like }
  })
)

export const updateLike = (like) => (
  $.ajax({
    url: `api/likes/${like.id}`,
    method: 'PATCH',
    data: { like }
  })
)

export const destroyLike = (likeId) => (
  $.ajax({
    url: `api/likes/${likeId}`,
    method: 'DELETE'
  })
)