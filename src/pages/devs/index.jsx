import { useState, useEffect } from "react";
import { Container, Input, Form, Button, CardContainer } from "./style";
import Header from "../../components/header";

import Card from "../../components/card";

import { getDevThunk } from "../../store/modules/devs/thunks";
import { useDispatch, useSelector } from "react-redux";

const Devs = () => {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.devs);
  const allDevs = useSelector((state) => state.allDevs);

  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(allDevs.length / 15);
  }, [allDevs]);

  useEffect(() => {
    dispatch(getDevThunk(page));
  }, [page]);

  const next = () => {
    setPage(page + 1);
  };
  const prev = () => {
    setPage(page - 1);
  };

  const handdleInput = (event) => {
    setInput(event.target.value);
  };

  const handdleSubmit = (event) => {
    event.preventDefault();
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
            {page < totalPages && <button onClick={next}>Próxima</button>}
          </div>
        </CardContainer>
      </Container>
    </>
  );
};

export default Devs;
