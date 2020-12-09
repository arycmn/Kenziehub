import { GET_TOKEN } from "./actionsType";

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});
