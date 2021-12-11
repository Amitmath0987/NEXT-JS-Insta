import { combineReducers } from "redux";
import { auth } from "../sagas/authSaga";

const appReducer = combineReducers({
  auth: auth.reducers.authReducers,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
