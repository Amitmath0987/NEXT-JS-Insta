import { call, put, takeLatest } from "redux-saga/effects";
import { REGISTER_SUBMIT, SET_AUTH_STATE } from "../constants/authContstants";
import { userRegistration } from "../../services/auth";
const initialState = {
  currentUser: {},
};
// const userRegisteration = ({ payload }) => {};
export const auth = {
  effects: {
    *registerUser({ payload }) {
      yield put({
        type: SET_AUTH_STATE,
        payload: {
          key: "registerUserLoading",
          value: true,
        },
      });

      try {
        const res = yield call(userRegistration, payload);
      } catch (error) {
        console.log(error);
      }

      yield put({
        type: SET_AUTH_STATE,
        payload: {
          key: "registerUserLoading",
          value: false,
        },
      });
    },
  },
  reducers: {
    authReducers: (state = initialState, action) => {
      return state;
    },
  },
};

function* authSaga() {
  yield takeLatest(REGISTER_SUBMIT, auth.effects.registerUser);
}

export default authSaga;
