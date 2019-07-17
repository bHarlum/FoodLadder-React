import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import headerStylesReducer from "./header_styles";
import authReducer from "./auth_reducer";
import userReducer from "./user_reducer";

export default combineReducers({
  form: formReducer,
  headerStyles: headerStylesReducer,
  auth: authReducer,
  user: userReducer
});