/*
Action types
*/
export const SET_DISPLAY = 'SET_DISPLAY';
export const OPEN_ABOUT_ME = 'OPEN_ABOUT_ME';
export const CLOSE_APP = 'CLOSE_APP';
export const SET_OS = 'SET_OS';

/*
Other Constants
*/
export const DISPLAY_TYPE = {
  HOME: "HOME",
  TEXT_APP: "TEXT_APP",
  CONTACT_ME: "CONTACT_ME",
  ABOUT_ME: "ABOUT_ME",
  PROJECTS_APP: "PROJECTS_APP",
  INTERESTS_APP: "INTERESTS_APP",
  RECENTS: "RECENTS",
}
const APP_NAME = {
  ABOUT_ME: "ABOUT_ME",
  PROJECTS: "PROJECTS",
}
export const OS = {
  DROID: 'DROID',
  IOS: 'IOS',
}

/*
Actions
*/
export function dispatchHome() {
  return {
    type: SET_DISPLAY,
    display: DISPLAY_TYPE.HOME
  }
}
export function dispatchAboutMe() {
  return {
    type: SET_DISPLAY,
    display: DISPLAY_TYPE.ABOUT_ME
  }
}
export function dispatchProjects() {
  return {
    type: SET_DISPLAY,
    display: DISPLAY_TYPE.PROJECTS_APP
  }
}
export function dispatchInterests() {
  return {
    type: SET_DISPLAY,
    display: DISPLAY_TYPE.INTERESTS_APP
  }
}
export function dispatchTexting() {
  return {
    type: SET_DISPLAY,
    display: DISPLAY_TYPE.TEXT_APP
  }
}
export function dispatchRecents() {
  return {
    type: SET_DISPLAY,
    display: DISPLAY_TYPE.RECENTS
  }
}

export function dispatchOpenAboutMe() {
  return {
    type: OPEN_ABOUT_ME
  }
}

export function dispatchCloseAboutMe() {
  return {
    type: CLOSE_APP,
    display: DISPLAY_TYPE.ABOUT_ME
  }
}

export function dispatchCloseProjects() {
  return {
    type: CLOSE_APP,
    display: DISPLAY_TYPE.PROJECTS_APP
  }
}
export function dispatchCloseInterests() {
  return {
    type: CLOSE_APP,
    display: DISPLAY_TYPE.INTERESTS_APP
  }
}
export function dispatchCloseTexting() {
  return {
    type: CLOSE_APP,
    display: DISPLAY_TYPE.TEXT_APP
  }
}

export function dispatchSetDroid() {
  return {
    type: SET_OS,
    os: OS.DROID
  }
}

export function dispatchSetiOS() {
  return {
    type: SET_OS,
    os: OS.IOS
  }
}