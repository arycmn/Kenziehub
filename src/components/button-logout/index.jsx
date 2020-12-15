import { useHistory } from "react-router-dom";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { validateThunk } from "../../store/modules/auth/thunks";

const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    message.success("Deslogado");
    dispatch(validateThunk(false));
    window.localStorage.clear();
    history.push("/");
  };

  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
