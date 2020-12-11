import { Link } from "react-router-dom";

import { Container, Avatar, Name, Info, Bio, Tech } from "./style";
import Header from "../../components/header";
import { useSelector } from "react-redux";
import { mockData } from "../../helper/mockUser";

const Profile = () => {
  const { profile } = useSelector((state) => state);

  return (
    <>
      <Header />
      <Container>
        <Avatar src={profile.avatar_url} alt={profile.name} />
        <Name>{profile.name}</Name>
        <Info>{profile.email}</Info>
        <Info>{profile.course_module}</Info>
        <Bio>{profile.bio}</Bio>
        <Info>
          <a href={profile.contact} rel="noreferrer" target="_blank">
            {profile.contact}
          </a>
        </Info>
        <Tech>
          {profile.techs?.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
        </Tech>

        <Link to="/profile/settings">Alterar informações</Link>
      </Container>
    </>
  );
};

export default Profile;
