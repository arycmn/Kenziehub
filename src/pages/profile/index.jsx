import { Link } from "react-router-dom";

import { Container, Avatar, Name, Info, Bio, Tech } from "./style";
import Header from "../../components/header";

import { mockData } from "../../helper/mockUser";

const Profile = () => {
  return (
    <>
      <Header />
      <Container>
        <Avatar src={mockData.avatar_url} alt={mockData.name} />
        <Name>{mockData.name}</Name>
        <Info>{mockData.email}</Info>
        <Info>{mockData.course_module}</Info>
        <Bio>{mockData.bio}</Bio>
        <Info>
          <a href={mockData.contact} rel="noreferrer" target="_blank">
            {mockData.contact}
          </a>
        </Info>
        <Tech>
          {mockData.techs.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </Tech>

        <Link to="/profile/settings">Alterar informações</Link>
      </Container>
    </>
  );
};

export default Profile;
