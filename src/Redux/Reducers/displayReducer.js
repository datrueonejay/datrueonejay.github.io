import { SET_DISPLAY, DISPLAY_TYPE } from '../Actions/actionConstants';

export function display(state = DISPLAY_TYPE.HOME, action) {
  switch(action.type) {
    case SET_DISPLAY:
      return action.displayType
    default:
      return state
  }
}
