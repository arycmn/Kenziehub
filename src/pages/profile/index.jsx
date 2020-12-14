import { Link } from "react-router-dom";
import { Container, Avatar, Name, Info, Bio, Tech } from "./style";
import { api } from "../../services/API";
import { useSelector, useDispatch } from "react-redux";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import Header from "../../components/header";
<<<<<<< HEAD
import { useSelector } from "react-redux";
=======
import PopupExample from "../../components/add-work";
>>>>>>> df17dda5f812570787f931ac6d6d293a74d64b7c

const Profile = () => {
  const { profile, token } = useSelector((state) => state);

  const imageDefault =
    "https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png";

  const dispatch = useDispatch();

  const handleRemoveWork = (id) => {
    api
      .delete(`/users/works/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const list = profile.works.filter((work) => work.id !== id);

        dispatch(getProfileThunk({ ...profile, works: list }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <Container>
        <Avatar
          src={profile.avatar_url ? profile.avatar_url : imageDefault}
          alt={profile.name}
        />

        <Name>{profile.name}</Name>
        <Info>{profile.email}</Info>
        <Info>{profile.course_module}</Info>
        <Bio>{profile.bio}</Bio>
        <Info>{profile.contact}</Info>
        <Tech>
          {profile.techs?.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
          {profile.works?.map((item, index) => (
            <span key={index}>
              {item.title}
              <button onClick={() => handleRemoveWork(item.id)}>Excluir</button>
            </span>
          ))}
        </Tech>
        <PopupExample />

        <Link to="/profile/settings">Alterar informações</Link>
      </Container>
    </>
  );
};

export default Profile;
