import { fork, all } from "redux-saga/effects";
import authSaga from "./authSaga";
import postSaga from "./postSaga";

export default function* watch() {
  yield all([fork(authSaga), fork(postSaga)]);
}
