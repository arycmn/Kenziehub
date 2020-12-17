import { addFriends, removeFriends } from "./actions";

export const addFriendsThunk = (friend) => (dispatch, getState) => {
  const { friends } = getState();

  const friendList = dispatch(addFriends([...friends, friend]));

  return friendList;
};

export const removeFriendsThunk = (id) => (dispatch, getState) => {
  const { friends } = getState();

  const filterFriends = friends.filter((friend) => friend.id !== id);

  const newFriendList = dispatch(removeFriends(filterFriends));

  return newFriendList;
};
