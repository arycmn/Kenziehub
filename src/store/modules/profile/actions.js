import { GET_PROFILE } from "./actionsTypes";

export const getProfile = (profile) => ({
  type: { GET_PROFILE },
  profile,
});
