import {
  Container,
  StyledCard,
  Image,
  Name,
  CourseModule,
  Button,
} from "./style";

import CardDetail from "../cardDatail";

const Card = ({ user }) => {
  const imageDefault =
    "https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png";

  const cardDetail = () => {
    //abrir a popUp com o componente
    // <CardDetail />;
  };

  return (
    <Container>
      {user.map(({ name, course_module, avatar }, index) => (
        <StyledCard key={index}>
          {{ avatar } !== null ? (
            <Image alt={name} src={avatar} />
          ) : (
            <Image alt={name} src={imageDefault} />
          )}
          <Name>{name}</Name>
          <CourseModule>{course_module}</CourseModule>
          <Button onClick={cardDetail}>Saber mais</Button>
        </StyledCard>
      ))}
    </Container>
  );
};

export default Card;
