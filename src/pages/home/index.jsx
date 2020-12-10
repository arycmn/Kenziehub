import { Container, Logo, Title, Phrase, Login, Register } from "./style";

const Home = () => {
  return (
    <Container>
      <Logo />
      <Title>Program Mate</Title>
      <Phrase>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
      </Phrase>
      <Login>Login</Login>
      <Register>Register</Register>
    </Container>
  );
};

export default Home;
