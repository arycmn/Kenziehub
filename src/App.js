import styled from "styled-components";
import "./styles/index.css";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { allDevsThunk } from "./store/modules/allDevs/thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allDevsThunk());
  }, []);

  return (
    <Body>
      <GlobalStyle />
      <Routes />
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
