import { ADD_FRIEND, REMOVE_FRIEND } from "./actionsTypes";

export const addFriends = (friend) => ({
  type: { ADD_FRIEND },
  friend,
});
export const removeFriends = (id) => ({
  type: { REMOVE_FRIEND },
  id,
});
