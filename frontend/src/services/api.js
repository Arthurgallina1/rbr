import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  // baseURL: "http://192.168.178.140:8000",
});

export default api;
