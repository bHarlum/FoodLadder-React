import types from "../actions/types";

const defaultState = {
  position: "static",
  logoFill: "#000",
  logoWidth: "250px"
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.HEADER_STYLES: 
      return {...state, ...action.payload};
    default:
      return state;
  }
}