import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import headerStylesReducer from "./header_styles";
import authReducer from "./auth_reducer";
import userReducer from "./user_reducer";
import threadReducer from "./thread_reducer";
import spinnerReducer from "./spinner_reducer";

export default combineReducers({
  form: formReducer,
  headerStyles: headerStylesReducer,
  auth: authReducer,
  user: userReducer,
  forum: threadReducer,
  loading: spinnerReducer
});