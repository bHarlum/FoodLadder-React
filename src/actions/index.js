import types from "./types";

export const setHeader = (styles) => {
  return {
    type: types.HEADER_STYLES,
    payload: {
      ...styles
    }
  }
}

export const resetHeader = () => {
  return { 
    type: types.HEADER_STYLES,
    payload: {
      position: "static",
      logoFill: "#000",
      logoWidth: "250px"
    }
  }
}

export const setAuthToken = (token) => {
  localStorage.setItem("token", token);
  return {
    type: types.AUTH_TOKEN,
    payload: token
  }
}

export const clearAuthToken = () => {
  localStorage.clear();
  return {
    type: types.AUTH_TOKEN,
    payload: null
  }
}

export const setCurrentUser = (user) => {
  return {
    type: types.CURRENT_USER,
    payload: user
  }
}

export const clearCurrentUser = () => {
  return {
    type: types.CURRENT_USER,
    payload: {}
  }
}

export const setThread = (newThread) => {
  return {
    type: types.SET_THREAD,
    payload: newThread
  }
}

export const setSpinner = (bool) => {
  return {
    type: types.SET_SPINNER,
    payload: bool
  }
}