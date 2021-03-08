// For Users in Database

export const login = (user) => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
)
  
export const logout = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
)

// User Creation

export const fetchUsers = () => (
  $.ajax({
    url: '/api/users',
  })
)

export const fetchUser = (id) => (
  $.ajax({
    url: `/api/users/${id}`
  })
)

export const signup = (user) => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
)