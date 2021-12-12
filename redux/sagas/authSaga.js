import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_SUBMIT, REGISTER_SUBMIT } from "../constants/authContstants";
import { userLogin, userRegistration } from "../../services/auth";
// import { promises as fsPromises } from "fs";
import { implementPromiseAction } from "@adobe/redux-saga-promise";
const initialState = {
  loading: false,
  currentUser: {},
};
// const userRegisteration = ({ payload }) => {};
export const auth = {
  effects: {
    *registerUser({ payload }) {
      let res;
      let err;
      console.log(`payload`, payload);
      yield put({
        type: SET_LOADING,
        payload: {
          key: "registerUserLoading",
          value: true,
        },
      });

      try {
        res = yield call(userRegistration, payload);
      } catch (error) {
        err = error;
      }
      if (err) {
        // some api level error occurred. This can be handled in dispatch
        return Promise.reject(err);
      }
      return res;
    },
    *loginUser({ payload }) {
      console.log(`payload`, payload);
      // yield put({
      //   type: SET_LOADING,
      //   payload: {
      //     key: "registerUserLoading",
      //     value: true,
      //   },
      // });

      try {
        const res = yield call(userLogin, payload);
        console.log(res, "loginResponse");
      } catch (error) {
        // err = error;
      }
      // return res;
    },
  },
  reducers: {
    authReducer(state = initialState, action) {
      // console.log(state, "state");
      // console.log(action, "action");
      // switch (action.type) {
      //   case SET_LOADING:
      //     return state.set("loading", action.payload.value);
      //   case SET_ERROR:
      //     return state.set("errorMessage", action.payload);
      //   // case SET_AUTH_STATE: {
      //   //   return {
      //   //     [action.payload.key]: action.payload.value,
      //   //   };
      //   // }
      //   case CLEAR_AUTH_STATE: {
      //     return fromJS({
      //       initialState,
      //     });
      //   }
      //   default:
      //     return state;
      // }
      return state;
    },
  },
};

function* authSaga() {
  yield takeLatest(REGISTER_SUBMIT, auth.effects.registerUser);
  yield takeLatest(LOGIN_SUBMIT, auth.effects.loginUser);
}

export default authSaga;
