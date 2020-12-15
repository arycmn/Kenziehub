import {
  Container,
  Logo,
  Title,
  Phrase,
  ButtonsPlace,
  Menu,
  Login,
  Register,
  Teste,
} from "./style";
import { useHistory } from "react-router-dom";
import imageHome from "../../images/imageHome.jpg";

const Home = () => {
  let history = useHistory();

  const handleClickLogin = () => {
    history.push("/login");
  };

  const handleClickRegister = () => {
    history.push("/register");
  };
  return (
    <Container>
      <Logo image={imageHome} />
      <Menu>
        <Teste>
          <Title>ProgramMate</Title>
          <Phrase>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
          </Phrase>
        </Teste>
        <ButtonsPlace>
          <Login onClick={handleClickLogin}>Login</Login>
          <Register onClick={handleClickRegister}>Register</Register>
        </ButtonsPlace>
      </Menu>
    </Container>
  );
};

export default Home;
