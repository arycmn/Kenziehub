import { useState } from "react";
import { Container, Input, Form, Button, CardContainer } from "./style";
import Header from "../../components/header";

const Devs = () => {
  const [input, setInput] = useState("");

  const handdleInput = (event) => {
    setInput(event.target.value);
  };

  const handdleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <Container>
      <Header />
      <Form onSubmit={(event) => handdleSubmit(event)}>
        <Input onChange={(event) => handdleInput(event)} value={input} />
        <Button type="submit">Pesquisar</Button>
      </Form>
      <CardContainer />
    </Container>
  );
};

export default Devs;
