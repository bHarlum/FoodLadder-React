import types from "./../actions/types";

const defaultState = {
  current: {}
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.CURRENT_USER:
      console.log(`setting current user to ${action.payload}`);
      return {...state, current: action.payload};
    default:
      return state;
  }
}