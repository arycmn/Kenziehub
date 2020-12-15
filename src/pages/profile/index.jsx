import { Link } from "react-router-dom";
import { Container, Avatar, Name, Info, Bio, Tech } from "./style";
import { api } from "../../services/API";
import { useSelector, useDispatch } from "react-redux";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import Header from "../../components/header";
import AddWork from "../../components/add-work";
import AttWork from "../../components/att-work";
import AddTech from "../../components/add-tech";
import AttTech from "../../components/attTech";

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

  const handleRemoveTech = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const techList = profile.techs.filter((techs) => techs.id !== id);
        dispatch(getProfileThunk({ ...profile, techs: techList }));
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
          {profile.techs?.map((item, index) => (
            <div key={index}>
              <div>{item.title} </div>
              <div> Nível: {item.status}</div>
              <AttTech id={item.id} />
              <button onClick={() => handleRemoveTech(item.id)}>
                Excluir Tecnologia
              </button>
            </div>
          ))}
          <AddTech />
        </Tech>
        <Tech>
          {profile.works?.map((item, index) => (
            <div key={index}>
              <div>Nome: {item.title}</div>
              <div>
                Site:
                <a href={item.deploy_url} target="_blank" rel="noreferrer">
                  Ver deploy
                </a>
              </div>
              <AttWork id={item.id} />
              <button onClick={() => handleRemoveWork(item.id)}>
                Excluir Trabalho
              </button>
            </div>
          ))}
        </Tech>
        <AddWork />

        <Link to="/profile/settings">Alterar informações</Link>
      </Container>
    </>
  );
};

export default Profile;
