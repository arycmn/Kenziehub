import styled from "styled-components";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
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
