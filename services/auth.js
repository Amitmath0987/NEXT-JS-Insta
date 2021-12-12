import { callApi } from "../utils/CallApis";
import endPoints from "../utils/endPoints";

export const userLogin = async (payload) =>
  callApi({
    uriEndPoint: {
      ...endPoints.login,
    },
    body: payload,
  });

// export const logoutUser = async (payload: any) =>
//   callApi({
//     uriEndPoint: {
//       ...endPoints.logout,
//     },
//   })

export const userRegistration = async (payload) =>
  callApi({
    uriEndPoint: {
      ...endPoints.register,
    },
    body: payload,
  });

// export const testRequest = async (payload: any) =>
//   callApi({
//     uriEndPoint: {
//       ...endPoints.test,
//     },
//   })
