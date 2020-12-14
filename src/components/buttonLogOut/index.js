import { useHistory } from "react-router-dom";

const LogoutButton = () => {
  const history = useHistory();
  const logout = () => {
    window.localStorage.clear();
    history.push("/");
    window.location.reload();
  };
  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;