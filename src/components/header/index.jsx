import { Container } from "./style";
import { Link } from "react-router-dom";

const Header = () => (
  <Container>
    <Link to="/home">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/devs">Devs</Link>
  </Container>
);

export default Header;
