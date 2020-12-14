import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.me",
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
});
