import { useState } from "react";
import { Container, Input, Form, Button, CardContainer } from "./style";
import Header from "../../components/header";
import { useEffect } from "react";
import axios from "axios";

import Card from "../../components/card";

const Devs = () => {
  const [page, setPage] = useState(1); //Page State

  useEffect(() => {
    axios
      .get(`https://kenziehub.me/users?perPage=15&page=${page}`)
      .then((res) => setData(res.data));
  }, [`https://kenziehub.me/users?perPage=15&page=${page}`]);

  const [data, setData] = useState([]);

  const [input, setInput] = useState("");

  const next = () => {
    //Proxima pagina
    setPage(page + 1);
  };
  const prev = () => {
    //Pagina anterior
    setPage(page - 1);
  };

  const handdleInput = (event) => {
    setInput(event.target.value);
  };

  const handdleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <>
      <Container>
        <Header />
        <Form onSubmit={(event) => handdleSubmit(event)}>
          <Input onChange={(event) => handdleInput(event)} value={input} />
          <Button type="submit">Pesquisar</Button>
        </Form>
        <CardContainer page={page} setPage={setPage}>
          <Card user={data} />
          <div>
            {page > 1 && <button onClick={prev}>Anterior</button>}
            <button onClick={next}>Próxima</button>
          </div>
        </CardContainer>
      </Container>
    </>
  );
};

export default Devs;
