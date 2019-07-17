import types from "../actions/types";

const defaultState = {
  position: "static",
  logoFill: "#000",
  logoWidth: "300px"
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.HEADER_STYLES: 
      console.log("running header position reducer");
      return {...state, ...action.payload};
    default:
      return state;
  }
}