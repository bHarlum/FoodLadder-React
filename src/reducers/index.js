import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import testReducer from "./test_reducer";
import headerStylesReducer from "./header_styles";
import authReducer from "./auth_reducer";

export default combineReducers({
  redux_test: testReducer,
  form: formReducer,
  header_styles: headerStylesReducer,
  auth: authReducer,
});