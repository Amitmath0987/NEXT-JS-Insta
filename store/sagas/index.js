import { fork, all } from "redux-saga/effects";
import authSaga from "./authSaga";
// import postSaga from "./postSaga";
// import userSaga from "./userSaga";
// import messageSaga from "./messageSaga";

export default function* watch() {
  yield all([
    fork(authSaga),
    // fork(postSaga),
    // fork(userSaga),
    // fork(messageSaga),
  ]);
}
