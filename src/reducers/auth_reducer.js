import types from "./../actions/types";

const defaultState = {
  token: localStorage.getItem("token") || null
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.AUTH_TOKEN:
      return {...state, 
        token: action.payload
      };
    default:
      return state;
  }
}