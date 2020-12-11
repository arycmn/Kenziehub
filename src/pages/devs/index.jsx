import { useState } from "react";
import { Container, Input, Form, Button, CardContainer } from "./style";
import Header from "../../components/header";
import { useEffect } from "react";

import Card from "../../components/card";

import { getDevThunk } from "../../store/modules/devs/thunks";
import { useDispatch, useSelector } from "react-redux";

const Devs = () => {
  const [page, setPage] = useState(1); //Page State
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.devs);

  useEffect(() => {
    dispatch(getDevThunk(page));
  }, [page]);

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
