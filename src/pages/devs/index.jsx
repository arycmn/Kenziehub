import { useState, useEffect } from "react";
import { Container, Input, SearchArea } from "./style";
import Header from "../../components/header";
import CardContainer from "../../components/card-container";

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
    dispatch(getDevThunk(page));
  }, [allDevs, page]);

  const next = () => {
    setPage(page + 1);
  };
  const prev = () => {
    setPage(page - 1);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    const searchDevs = allDevs.filter((dev) =>
      dev.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUsers(searchDevs);
  };

  return (
    <>
      <Header />

      <Container>
        {page > 1 && <button onClick={prev}>Anterior</button>}
        {page < totalPages && <button onClick={next}>Próxima</button>}

        <SearchArea>
          <Input
            placeholder="Procure o dev pelo nome"
            onChange={handleInput}
            value={input}
          />
        </SearchArea>

        <CardContainer
          devs={devs}
          input={input}
          filteredUsers={filteredUsers}
        />
      </Container>
    </>
  );
};

export default Devs;
