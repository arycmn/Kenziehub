import { Container, Avatar, Name, Info, Bio, Tech } from "./style";
import Header from "../../components/header";

const mockData = {
  name: "Débora Barros",
  email: "debora_lbarros@outlook.com",
  course_module: "2° Módulo (Frontend avançado)",
  bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  contact: "https://linkedin.com/in/debora-lbarros",
  techs: [
    {
      id: "55126701-18ac-40df-aab9-3a88657db446",
      title: "React",
      status: "Avançado",
      created_at: "2020-11-30T16:26:53.953Z",
      updated_at: "2020-11-30T16:26:53.953Z",
    },
    {
      id: "af06a853-c1fb-4a94-960d-1c6caa8d2b5c",
      title: "Typescript",
      status: "Avançado",
      created_at: "2020-11-30T18:40:08.316Z",
      updated_at: "2020-11-30T18:40:08.316Z",
    },
  ],
  works: [
    {
      id: "0cd019b5-10c5-4eb4-9781-5dff577cfd9e",
      title: "KenzieHub",
      description:
        "I was the backend developer of this project, and i did it using Typescript and NodeJS",
      deploy_url: "https://kenziehub.me",
      created_at: "2020-12-03T01:13:44.720Z",
      updated_at: "2020-12-03T01:13:44.720Z",
    },
  ],
  avatar_url: "https://picsum.photos/100/100",
};

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
      </Container>
    </>
  );
};

export default Profile;
