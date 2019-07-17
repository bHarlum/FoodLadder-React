import axios from "axios";
import store from "./../store";

const LocalAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

LocalAPI.interceptors.request.use((request) => {
  const state = store.getState();
  const token = state.auth.token;
  
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }

  return request;
})

LocalAPI.setAuthHeader = function (token) {
  this.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

LocalAPI.interceptors.response.use(function (config) {
  if (config.status === 401) {
    localStorage.removeItem("token");
    LocalAPI.defaults.headers.common["Authorization"] = null;
    return Promise.reject("Invalid Token");
  }

  return config;
})

export default LocalAPI;