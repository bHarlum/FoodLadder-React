import types from "../actions/types";

const defaultState = {
  location: null
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_LOCATION: 
      return { ...state, location: action.payload};
    default:
      return state;
  }
}