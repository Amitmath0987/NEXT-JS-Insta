import { combineReducers } from "redux";
import { auth } from "../sagas/authSaga";
// import { user } from "../sagas/userSaga";
// import { post } from "../sagas/postSaga";
// import { message } from "../sagas/messageSaga";
const appReducer = combineReducers({
  auth: auth.reducers.authReducer,
  //   user: user.reducers.userReducer,
  //   post: post.reducers.postReducer,
  //   message: message.reducers.messageReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
