export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';
export const CLEAR_CURRENT_TAB = 'CLEAR_CURRENT_TAB';

export const setCurrentTab = currentTab => ({
  type: SET_CURRENT_TAB,
  currentTab
})

export const clearCurrentTab = () => ({
  type: CLEAR_CURRENT_TAB
})