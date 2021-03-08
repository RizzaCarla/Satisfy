import {
  SET_CURRENT_TAB,
  CLEAR_CURRENT_TAB
} from '../../actions/library_tab_actions';

const defaultTab = {
  currentTab: "Albums"
}

const libraryTabReducer = (oldState = defaultTab, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case SET_CURRENT_TAB:
      return { currentTab: action.currentTab }
    case CLEAR_CURRENT_TAB:
      return defaultTab
    default:
      return oldState
  }
}

export default libraryTabReducer