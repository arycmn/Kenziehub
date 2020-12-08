import { createStore, combineReducers } from "redux";
import friendsReducer from "./modules/friends/reducer";
import tokenReducer from "./modules/token/reducer";
import devsReducer from "./modules/token/reducer";
import profileReducer from "./modules/token/reducer";

const reducers = combineReducers({
  friends: friendsReducer,
  token: tokenReducer,
  devs: devsReducer,
  profile: profileReducer,
});

const store = createStore(reducers);

export default store;
