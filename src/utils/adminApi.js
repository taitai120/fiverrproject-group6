import axios from "axios";
import { BASE_URL, ADMIN_TOKEN } from "./settings/config";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTk4MDgwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjUwMTI4NDAwfQ.43sCqLD_V6VUJP8qZLQSWO07uCIDI7bS5MGR92deYb8";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      token: ADMIN_TOKEN,
      tokenByClass: TOKEN_CYBERSOFT,

      Authorization: localStorage.getItem("UserAdmin")
        ? "Bearer " + JSON.parse(localStorage.getItem("UserAdmin")).token
        : "",
    };
    return config;
  },

  (errors) => {
    return Promise.reject(errors);
  }
);

export { api };
