import { Container, Box, Navegation } from "./style";
import LogoutButton from "../button-logout";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleToProfile = () => {
    history.push("/profile");
  };

  const handleToDevs = () => {
    history.push("/devs");
  };
  return (
    <Container>
      <Navegation>
        <Box>
          <button onClick={handleToProfile}>Perfil</button>{" "}
        </Box>
        <Box>
          {" "}
          <button onClick={handleToDevs}> Colegas</button>
        </Box>
      </Navegation>
      <Box>
        <LogoutButton />
      </Box>
    </Container>
  );
};

export default Header;
