import types from "./../actions/types";

const defaultState = {
  value: null
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.REDUX_TEST: 
      console.log("running");
      return {...state, value: action.payload};
    default:
      return state;
  }
}