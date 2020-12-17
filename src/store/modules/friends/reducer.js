import { ADD_FRIEND, REMOVE_FRIEND } from "./actionsTypes";

const friendsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FRIEND:
      const { friendList } = action;
      return friendList;

    case REMOVE_FRIEND:
      const { newFriendList } = action;
      return newFriendList;

    default:
      return state;
  }
};

export default friendsReducer;
