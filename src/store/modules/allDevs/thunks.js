import { allDevs } from "./actions.js";
import { api } from "../../../services/API";

export const allDevsThunk = (users) => (dispatch, getState) => {
  api.get("/users?perPage=2000").then((res) => dispatch(allDevs(res.data)));
};
