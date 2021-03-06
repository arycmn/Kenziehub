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
  Line,
  InfoContact,
} from "./style";
import { message, Popconfirm } from "antd";
import { useHistory } from "react-router-dom";
import { api } from "../../services/API";
import { useSelector, useDispatch } from "react-redux";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import Header from "../../components/header";
import AddWork from "../../components/add-work";
import AttWork from "../../components/att-work";
import AddTech from "../../components/add-tech";
import AttTech from "../../components/attTech";
import ViewDescription from "../../components/view-description";

const Profile = () => {
  const { profile, token } = useSelector((state) => state);

  const dispatch = useDispatch();
  const history = useHistory();
  const imageProfile =
    "https://img.icons8.com/clouds/500/000000/test-account.png";

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
            src={profile.avatar_url ? profile.avatar_url : imageProfile}
            alt={profile.name}
          />
          <Name>{profile.name}</Name>
          <InfoContact>
            <img
              alt="e-mail"
              src="https://img.icons8.com/clouds/70/000000/email.png"
            />
            {profile.email}
          </InfoContact>
          <InfoContact>
            {profile.course_module}
            <img
              alt="tech"
              src="https://img.icons8.com/clouds/70/000000/laptop.png"
            />
          </InfoContact>
          <Bio>
            <img
              alt="aspasesquerdas"
              src="https://img.icons8.com/doodle/38/000000/quote-left.png"
            />
            {profile.bio}
            <img
              alt="aspasdireitas"
              src="https://img.icons8.com/doodle/38/000000/quote-right.png"
            />
          </Bio>
          <InfoContact>
            <img
              alt="contact"
              src="https://img.icons8.com/clouds/70/000000/business-contact.png"
            />
            {profile.contact}
          </InfoContact>

          <ButtonsDiv>
            <Tech>
              <h2> Tecnologias e Linguagens:</h2>
              <div>
                {profile.techs?.map((item, index) => (
                  <Techs key={index}>
                    <Info>
                      <h3>{item.title}</h3>
                      Nível: {item.status}
                    </Info>
                    <div>
                      <AttTech id={item.id} />

                      <Button title="Excluir tecnologia">
                        <Popconfirm
                          title="Tem certeza que quer excluir esta tecnologia?"
                          okText="Sim"
                          cancelText="Não"
                          onConfirm={() => handleRemoveTech(item.id)}
                        >
                          <img
                            alt="lixo"
                            src="https://img.icons8.com/clouds/80/000000/delete-trash.png"
                          />
                        </Popconfirm>
                      </Button>
                    </div>
                  </Techs>
                ))}
              </div>
            </Tech>
            <AddTech />

            <Tech>
              <h2> Trabalhos realizados: </h2>
              {profile.works?.map((item, index) => (
                <Works key={index}>
                  <Info>
                    <h4>Nome: </h4>
                    <Line>
                      <h3>{item.title} </h3>
                      <ViewDescription description={item.description} />
                    </Line>
                  </Info>
                  <Info>
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
                  <div>
                    <AttWork id={item.id} />
                    <Button title="Excluir trabalho">
                      <Popconfirm
                        title="Tem certeza que quer excluir este trabalho?"
                        okText="Sim"
                        cancelText="Não"
                        onConfirm={() => handleRemoveWork(item.id)}
                      >
                        <img
                          alt="lixo"
                          src="https://img.icons8.com/clouds/80/000000/delete-trash.png"
                        />
                      </Popconfirm>
                    </Button>
                  </div>
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
