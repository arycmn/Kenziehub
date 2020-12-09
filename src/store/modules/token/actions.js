import { GET_TOKEN } from "./actionsTypes";

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});
