import { ADD_FRIEND, REMOVE_FRIEND } from "./actionsTypes";

export const addFriends = (friendList) => ({
  type: ADD_FRIEND,
  friendList,
});
export const removeFriends = (newFriendList) => ({
  type: REMOVE_FRIEND,
  newFriendList,
});
