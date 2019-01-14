import { SET_DISPLAY, DISPLAY_TYPE, OPEN_ABOUT_ME, CLOSE_APP, SET_OS, OS } from '../Actions/actionConstants';

const defaultState = {
    display: DISPLAY_TYPE.HOME,
    openApps: [],
    aboutMeAppOpen: false,
    os: OS.DROID,
}

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case SET_DISPLAY:
      // Put app in recents app if display is not home
      if (action.display != DISPLAY_TYPE.HOME && action.display != DISPLAY_TYPE.RECENTS) {
        var copy = state.openApps;
        var index = copy.indexOf(action.display);
        if (index != -1) {
          copy.splice(index, 1);
        }
        copy.unshift(action.display)
        return {
          ...state,
          openApps: copy,
          display: action.display
        }
      }
      // Otherwise just change display type
      return {
        ...state,
        display: action.display
      }
    case OPEN_ABOUT_ME:
      return {
        ...state,
        aboutMeAppOpen: true
      }
    case CLOSE_APP:
      var copy = state.openApps;
      var index = copy.indexOf(action.display);
      if (index != -1) {
        copy.splice(index, 1);
      }
      var aboutMeAppOpen = true;
      if (action.display === DISPLAY_TYPE.ABOUT_ME) {
        aboutMeAppOpen = false;
      }
      return {
        ...state,
        openApps: copy,
        aboutMeAppOpen: aboutMeAppOpen
      }
    case SET_OS:
      return {
        ...state,
        os: action.os
      }
    default:
      return state
  }
}