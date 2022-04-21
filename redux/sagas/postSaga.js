import { call, takeLatest } from "redux-saga/effects";
import { createPost } from "services/post";
import { CREATE_POST } from "../constants/postConstants";
const initialState = {};

export const post = {
  effects: {
    *createPost({ payload }) {
      try {
        const res = yield call(createPost, payload);
        if (payload?.cb) {
          payload.cb(res);
        }
      } catch (error) {}
    },
  },
  reducers: {
    createPost(state = initialState, action) {},
  },
};
function* postSaga() {
  yield takeLatest(CREATE_POST, createPost);
}
export default postSaga;
