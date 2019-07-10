import { combineReducers } from "redux";

import testReducer from "./test_reducer";

export default combineReducers({
  redux_test: testReducer,
});