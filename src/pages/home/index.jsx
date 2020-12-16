import {
  Container,
  Logo,
  Title,
  Phrase,
  ButtonsPlace,
  Menu,
  Content,
} from "./style";
import imageHome from "../../images/imageHome.jpg";
import Login from "../../components/login";
import SingUp from "../../components/sing-up";

const Home = () => {
  return (
    <Container>
      <Logo src={imageHome} />
      <Menu>
        <Content>
          <Title>ProgramMate</Title>
          <Phrase>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
          </Phrase>
        </Content>
        <ButtonsPlace>
          <Login />
          <SingUp />
        </ButtonsPlace>
      </Menu>
    </Container>
  );
};

export default Home;
