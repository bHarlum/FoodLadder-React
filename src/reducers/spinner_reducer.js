import types from "./../actions/types";

const defaultState = {
  spinner: false
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_SPINNER:
      return {...state, 
        spinner: action.payload
      };
    default:
      return state;
  }
}