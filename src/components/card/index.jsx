import {
  Container,
  StyledCard,
  Image,
  Name,
  CourseModule,
  Button,
} from "./style";

//import CardDetail from "../cardDatail";
import SaibaMais from "../saiba-mais";

const Card = ({ user }) => {
  const imageDefault =
    "https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png";

  const cardDetail = () => {
    //abrir a popUp com o componente
    // <CardDetail user={user}/>;
  };

  return (
    <Container>
      {user.map((uniqueUser, index) => (
        <StyledCard key={index}>
          {uniqueUser.avatar_url !== null ? (
            <Image alt={uniqueUser.name} src={uniqueUser.avatar_url} />
          ) : (
            <Image alt={uniqueUser.name} src={imageDefault} />
          )}
          <Name>{uniqueUser.name}</Name>
          <CourseModule>{uniqueUser.course_module}</CourseModule>
          <SaibaMais user={uniqueUser} />
        </StyledCard>
      ))}
    </Container>
  );
};

export default Card;
