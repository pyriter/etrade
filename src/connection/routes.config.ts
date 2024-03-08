const ROUTES = {
  hostname: "",
  endpoints: {
    oauth2Token: "/v1/oauth2/token",
    auth: "/auth",
  },
};

export const AUTHENTICATION = `${ROUTES.hostname}${ROUTES.endpoints.oauth2Token}`;
export const OAUTH2_TOKEN = `${ROUTES.hostname}${ROUTES.endpoints.oauth2Token}`;
