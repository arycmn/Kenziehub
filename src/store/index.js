import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import friendsReducer from "./modules/friends/reducer";
import tokenReducer from "./modules/token/reducer";
import devsReducer from "./modules/devs/reducer";
import profileReducer from "./modules/profile/reducer";
import allDevsReducer from "./modules/allDevs/reducer";
import validateReducer from "./modules/auth/reducer";

const reducers = combineReducers({
  friends: friendsReducer,
  token: tokenReducer,
  devs: devsReducer,
  profile: profileReducer,
  allDevs: allDevsReducer,
  isAuth: validateReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
