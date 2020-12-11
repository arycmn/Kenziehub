import { getDev } from "./action";
import { api } from "../../../services/API/index";

export const getDevThunk = (page) => (dispatch, getState) => {
  console.log(page);
  api
    .get(`/users?perPage=15&page=${page}`)
    .then((res) => dispatch(getDev(res.data)));
};
