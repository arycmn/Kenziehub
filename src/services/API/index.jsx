import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.me",
  header: {
    Authorization: localStorage.getItem("token"),
  },
});
