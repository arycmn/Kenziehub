import { useState, useEffect } from "react";
import { Container, Input, Button, CardContainer } from "./style";
import Header from "../../components/header";

import Card from "../../components/card";

import { getDevThunk } from "../../store/modules/devs/thunks";
import { useDispatch, useSelector } from "react-redux";

const Devs = () => {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const dispatch = useDispatch();
  const { devs, allDevs } = useSelector((state) => state);

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

  const handdleInput = (e) => {
    setInput(e.target.value);
    const searchDevs = allDevs.filter((dev) =>
      dev.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUsers(searchDevs);
  };

  return (
    <>
      <Container>
        <Header />
        <div>
          <Input
            placeholder="Procure o dev pelo nome"
            onChange={handdleInput}
            value={input}
          />
        </div>
        <CardContainer page={page} setPage={setPage}>
          {input === "" ? <Card user={devs} /> : <Card user={filteredUsers} />}
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
