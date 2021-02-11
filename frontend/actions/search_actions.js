export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const CLEAR_SEARCH_QUERY = 'CLEAR_SEARCH_QUERY';

export const setSearchQuery = searchQuery => ({
  type: SET_SEARCH_QUERY,
  searchQuery
})

export const clearSearchQuery = () => ({
  type: CLEAR_SEARCH_QUERY
})