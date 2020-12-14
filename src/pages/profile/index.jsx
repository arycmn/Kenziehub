import { Link } from "react-router-dom";

import { Container, Avatar, Name, Info, Bio, Tech } from "./style";
import Header from "../../components/header";
import { useSelector } from "react-redux";
import PopupExample from "../../components/add-work";

const Profile = () => {
  const { profile } = useSelector((state) => state);
  const imageDefault =
    "https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png";

  return (
    <>
      <Header />
      <Container>
<<<<<<< HEAD
        <Avatar
          src={profile.avatar_url ? profile.avatar_url : imageDefault}
          alt={profile.name}
        />
=======
        {profile.avatar_url !== null ? (
          <Avatar src={profile.avatar_url} alt={profile.name} />
        ) : (
          <Avatar src={imageDefault} alt={profile.name} />
        )}
>>>>>>> 20a0ed7daacd97819e894ec7659e067b5a400635

        <Name>{profile.name}</Name>
        <Info>{profile.email}</Info>
        <Info>{profile.course_module}</Info>
        <Bio>{profile.bio}</Bio>
        <Info>{profile.contact}</Info>
        <Tech>
          {profile.techs?.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
          {profile.works?.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
        </Tech>
        <PopupExample />

        <Link to="/profile/settings">Alterar informações</Link>
      </Container>
    </>
  );
};

export default Profile;
