import { useState, useEffect } from "react";
import { Container, Input, SearchArea, Pages, Button } from "./style";
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
        <Pages>
          {page > 1 && (
            <Button onClick={prev}>
              <img
                alt="previous"
                src="https://img.icons8.com/clouds/100/000000/left.png"
              />
            </Button>
          )}

          <SearchArea>
            <Input
              placeholder="Procure o dev pelo nome"
              onChange={handleInput}
              value={input}
            />
          </SearchArea>

          {page < totalPages && (
            <Button onClick={next}>
              <img
                alt="next"
                src="https://img.icons8.com/clouds/100/000000/right.png"
              />
            </Button>
          )}
        </Pages>

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
