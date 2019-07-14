import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import testReducer from "./test_reducer";

export default combineReducers({
  redux_test: testReducer,
  form: formReducer,
});