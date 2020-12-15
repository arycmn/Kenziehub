import { Container, Box } from "./style";
import { Link } from "react-router-dom";
import LogoutButton from "../../components/buttonLogOut";

const Header = () => (
  <Container>
    <Box>
      <Link to="/profile">Profile</Link>{" "}
    </Box>
    <Box>
      {" "}
      <Link to="/devs">Devs</Link>
    </Box>
    <Box>
      <LogoutButton />
    </Box>
  </Container>
);

export default Header;
