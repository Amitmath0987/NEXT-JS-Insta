import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_CURRENTUSER,
  REGISTER_SUBMIT,
  SET_AUTH_STATE,
  SET_ERROR,
  SET_LOADING,
} from "../constants/authContstants";
import {
  getCurrentUser,
  userLogin,
  userRegistration,
} from "../../services/auth";
// import { promises as fsPromises } from "fs";
import {
  implementPromiseAction,
  resolvePromiseAction,
} from "@adobe/redux-saga-promise";
import { loginAction } from "Components/AuthComponents/SignIn/SignIn";
const initialState = {
  loading: false,
  isLoggedIn:
    typeof window !== "undefined" ? localStorage.getItem("isLoggedIn") : false,
  currentUser: {},
};
// const userRegisteration = ({ payload }) => {};
export const auth = {
  effects: {
    *getCurrentUser({ payload }) {
      try {
        let res = yield call(getCurrentUser, payload);
        if (res) {
          localStorage.setItem("isLoggedIn", true);
        }
        if (res && payload.successCb) {
          payload.successCb(res);
        }
      } catch (error) {
        if (error) {
          localStorage.removeItem("isLoggedIn");
        }
        if (error && payload.errorCb) {
          payload.errorCb(error);
        }
      }
    },
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
        res = yield call(resolvePromiseAction, userRegistration, payload);
      } catch (error) {
        err = error;
      }
    },
    *loginUser({ payload }) {
      console.log(`payload`, payload);
      yield put({
        type: SET_LOADING,
        payload: {
          key: "loginUserLoading",
          value: true,
        },
      });

      try {
        const res = yield call(userLogin, payload);
        localStorage.setItem("accessToken", res.token);
        localStorage.setItem("currentUser", JSON.stringify(res.user));
        localStorage.setItem("isLoggedIn", true);

        yield put({
          type: SET_AUTH_STATE,
          payload: {
            key: "isLoggedIn",
            value: true,
          },
        });
        // if (payload.cb) {
        //   payload.cb(res);
        // }
      } catch (error) {
        console.log(`error`, error);
        // err = error;
      }
      yield put({
        type: SET_LOADING,
        payload: {
          key: "loginUserLoading",
          value: false,
        },
      });
    },
  },
  reducers: {
    authReducer(state = initialState, action) {
      console.log(state, "state");
      console.log(action, "action");
      switch (action.type) {
        case SET_LOADING:
          return { [action.payload.key]: action.payload.value };
        case SET_ERROR:
          return state.set("errorMessage", action.payload);
        case SET_AUTH_STATE: {
          return {
            [action.payload.key]: action.payload.value,
          };
        }

        default:
          return state;
      }
      // return state;
    },
  },
};

function* authSaga() {
  yield takeLatest(REGISTER_SUBMIT, auth.effects.registerUser);
  yield takeLatest(GET_CURRENTUSER, auth.effects.getCurrentUser);

  yield takeLatest(loginAction, auth.effects.loginUser);
}

export default authSaga;
