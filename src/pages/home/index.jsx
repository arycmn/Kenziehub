import { Container, Logo, Title, Phrase, Login, Register } from "./style";
import { useHistory } from "react-router-dom";

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
      <Logo />
      <Title>Program Mate</Title>
      <Phrase>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
      </Phrase>
      <Login onClick={handleClickLogin}>Login</Login>
      <Register onClick={handleClickRegister}>Register</Register>
    </Container>
  );
};

export default Home;
