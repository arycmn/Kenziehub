import {
  Container,
  Avatar,
  Name,
  Info,
  Bio,
  Tech,
  ProfileButton,
  ChangeInfo,
} from "./style";
import { api } from "../../services/API";
import { useSelector, useDispatch } from "react-redux";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import Header from "../../components/header";
import PopupExample from "../../components/add-work";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const { profile, token } = useSelector((state) => state);

  const imageDefault =
    "https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png";

  const dispatch = useDispatch();
  const history = useHistory();

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

  const handleClickChangeInfo = () => {
    history.push("/profile/settings");
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
              <ProfileButton onClick={() => handleRemoveWork(item.id)}>
                Excluir
              </ProfileButton>
            </span>
          ))}
        </Tech>
        <PopupExample />

        <ChangeInfo onClick={handleClickChangeInfo}>
          Alterar informações
        </ChangeInfo>
      </Container>
    </>
  );
};

export default Profile;
