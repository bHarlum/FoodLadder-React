import types from "./../actions/types";

const defaultState = {
  thread: null
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_THREAD:
      return {...state, 
        thread: action.payload
      };
    default:
      return state;
  }
}