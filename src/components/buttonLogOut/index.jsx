import { useHistory } from "react-router-dom";
import { message } from "antd";

const LogoutButton = () => {
  const history = useHistory();

  const logout = () => {
    message.success("Deslogado");

    window.localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
