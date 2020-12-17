import "antd/dist/antd.css";
import "reactjs-popup/dist/index.css";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { allDevsThunk } from "./store/modules/allDevs/thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allDevsThunk());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
