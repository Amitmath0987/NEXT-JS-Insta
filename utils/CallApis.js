import Axios, { AxiosRequestConfig, Method } from "axios";
import queryString from "querystring";
Axios.defaults.withCredentials = true;

export const hostname = () => {
  let hostUrl = "";
  if (process.browser) {
    switch (window.location.hostname) {
      case "insta-2.web.app": // production
        hostUrl = "https://api.insta2.info";
        break;
      case "localhost": // dev
        hostUrl = "http://localhost:5000";
        break;
      default:
        hostUrl = "http://localhost:5000";
        break;
    }
  }
  return hostUrl;
};

const hostUrl = hostname();

export const makeUrl = ({ uri = "", pathParams, query, version }, host) =>
  `${host || hostUrl}${version || ""}${uri
    .split("/")
    .map((param) =>
      param.charAt(0) === ":" ? encodeURI(pathParams[param.slice(1)]) : param
    )
    .join("/")}${query ? `?${queryString.stringify(query)}` : ""}`;

/**
 * Extract the error messages from a failed API response.
 * @param {} apiResponse
 */
// const extractErrors = () => {};

/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 1.0.0
 *
 * @alias callApi
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise} Body Data from the server.
 */

export const callApi = ({
  uriEndPoint = { uri: "", method: "GET", version: "", headerProps: {} },
  pathParams,
  query,
  body,
}) => {
  return new Promise(async (resolve, reject) => {
    Axios({
      method: uriEndPoint.method || "POST",
      url: makeUrl({ ...uriEndPoint, pathParams, query }, hostUrl),
      headers: {
        ...uriEndPoint.headerProps,
        ...getDefaultHeaders(),
      },
      data: body || undefined,
    })
      .then((response) => {
        if (response?.data?.accessToken) {
          localStorage.setItem("accessToken", response.data.accessToken);
        }
        resolve(response.data);
      })
      .catch((err) => {
        if (!err.response) {
          // NavigatorService.replace('Login');
        }

        if (err?.response?.status === 401) {
          // Unauthorized
          reject(err.response);
        }
        reject(err.response);
      });
  });
};

export const getDefaultHeaders = () => ({
  authorization: localStorage.getItem("accessToken"),
  "Content-Type": "application/json",
});
