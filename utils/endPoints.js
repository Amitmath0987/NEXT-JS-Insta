const defaults = {
  methods: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  },
  versions: {
    v1: {
      version: "/api",
    },
  },
};

const endPoints = {
  test: {
    method: "GET",
    ...defaults.versions.v1,
    uri: "/test",
    headerProps: {},
  },

  // auth endpoints
  login: {
    method: "POST",
    ...defaults.versions.v1,
    uri: "/auth/login",
    headerProps: {},
  },
  logout: {
    method: "DELETE",
    ...defaults.versions.v1,
    uri: "/auth/logout",
    headerProps: {},
  },
  register: {
    method: "POST",
    ...defaults.versions.v1,
    uri: "/auth/signup",
    headerProps: {},
  },
  me: {
    method: "GET",
    ...defaults.versions.v1,
    uri: "/me",
    headerProps: {},
  },
  createPost: {
    method: "POST",
    ...defaults.versions.v1,
    uri: "/post/create",
  },
};

export default endPoints;
