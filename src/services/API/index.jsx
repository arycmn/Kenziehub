import axios from "axios";

export const axiosConfig = () => {
  axios.defaults.baseURL = "https://kenziehub.me";
  // axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
  // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
};
