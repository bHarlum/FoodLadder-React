import types from "./types";

export const testAction = () => {
  return {
    type: types.REDUX_TEST,
    payload: "Redux test payload"
  };
}