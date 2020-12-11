import { Container } from "./style";
import { Link } from "react-router-dom";
import LogoutButton from "../../components/buttonLogOut";

const Header = () => (
  <Container>
    <Link to="/profile">Profile</Link>
    <Link to="/devs">Devs</Link>
    <LogoutButton />
  </Container>
);

export default Header;
