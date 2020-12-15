import {
  Container,
  Avatar,
  Name,
  Info,
  Bio,
  Tech,
  Techs,
  Box,
  ButtonsDiv,
  ChangeInfo,
  Works,
  Button,
} from "./style";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import { api } from "../../services/API";
import { useSelector, useDispatch } from "react-redux";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import Header from "../../components/header";
import AddWork from "../../components/add-work";
import AttWork from "../../components/att-work";
import AddTech from "../../components/add-tech";
import AttTech from "../../components/attTech";
import { AddButton } from "../../components/add-work/style";

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
        message.success("Trabalho removido");

        const list = profile.works.filter((work) => work.id !== id);
        dispatch(getProfileThunk({ ...profile, works: list }));
      })
      .catch((err) => {
        message.error("Erro ao remover trabalho");
        console.log(err);
      });
  };

  const handleRemoveTech = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        message.success("Tecnologia removida");

        const techList = profile.techs.filter((techs) => techs.id !== id);
        dispatch(getProfileThunk({ ...profile, techs: techList }));
      })
      .catch((err) => {
        message.error("Erro ao remover tecnologia");
        console.log(err);
      });
  };

  const handleClickChangeInfo = () => {
    history.push("/profile/settings");
  };
  return (
    <>
      <Header />

      <Container>
        <Box>
          <Avatar
            src={profile.avatar_url ? profile.avatar_url : imageDefault}
            alt={profile.name}
          />

          <Name>{profile.name}</Name>
          <Info>{profile.email}</Info>
          <Info>{profile.course_module}</Info>
          <Bio>{profile.bio}</Bio>
          <Info>{profile.contact}</Info>
          <p> Tecnologias e Linguagens:</p>
          <ButtonsDiv>
            <Tech>
              <div>
                {profile.techs?.map((item, index) => (
                  <Techs key={index}>
                    <Info>
                      {" "}
                      <h3>{item.title}</h3>
                      Nível: {item.status}
                    </Info>
                    <AttTech id={item.id} />
                    <Button onClick={() => handleRemoveTech(item.id)}>
                      <img
                        alt="lixo"
                        src="https://img.icons8.com/clouds/60/000000/delete-trash.png"
                      />
                    </Button>
                  </Techs>
                ))}
              </div>
            </Tech>
            <AddTech />
            <p> Trabalhos realizados: </p>
            <Tech>
              {profile.works?.map((item, index) => (
                <Works key={index}>
                  <Info>
                    <h4>Nome: </h4>
                    <h3>{item.title} </h3>{" "}
                  </Info>
                  <Info>
                    {" "}
                    <h4>Site:</h4>
                    <h3>
                      <a
                        href={item.deploy_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver deploy
                      </a>
                    </h3>
                  </Info>
                  <AttWork id={item.id} />
                  <Button onClick={() => handleRemoveWork(item.id)}>
                    <img
                      alt="lixo"
                      src="https://img.icons8.com/clouds/60/000000/delete-trash.png"
                    />
                  </Button>
                </Works>
              ))}
            </Tech>
            <AddWork />
          </ButtonsDiv>

          <ChangeInfo onClick={handleClickChangeInfo}>
            Alterar informações
          </ChangeInfo>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
