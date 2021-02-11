import { 
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_QUERY
} from '../../actions/search_actions';

const nullSearchQuery = {
  searchQuery: null
}

const searchReducer = (oldState = nullSearchQuery, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {searchQuery: action.searchQuery}
    case CLEAR_SEARCH_QUERY:
      return nullSearchQuery
    default:
      return oldState
  }
}

export default searchReducer