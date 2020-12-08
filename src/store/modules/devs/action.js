import { GET_DEV } from "./actionsTypes";

export const getDev = (dev) => ({
  type: { GET_DEV },
  dev,
});
