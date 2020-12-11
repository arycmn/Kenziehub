import { GET_PROFILE } from "./actionsType";

export const getProfile = (profile) => ({
  type: GET_PROFILE,
  profile,
});
