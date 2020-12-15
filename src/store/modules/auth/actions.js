import { IS_AUTH } from "./actionType";

export const validate = (auth) => ({
  type: IS_AUTH,
  auth,
});
