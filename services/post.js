import { callApi } from "utils/CallApis";
import endPoints from "utils/endPoints";

export const createPost = async (payload) =>
  callApi({
    uriEndPoint: {
      ...endPoints.createPost,
    },
    body: payload?.formData,
  });
