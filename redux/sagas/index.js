import { fork, all } from "redux-saga/effects";
import authSaga from "./authSaga";

export default function* watch() {
  yield all([fork(authSaga)]);
}
