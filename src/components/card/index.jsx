import { Container, StyledCard, Image, Name, CourseModule } from "./style";

import SaibaMais from "../saiba-mais";

const Card = ({ user }) => {
  const imageDefault =
    "https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png";

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
          <SaibaMais user={uniqueUser} imageDefault={imageDefault} />
        </StyledCard>
      ))}
    </Container>
  );
};

export default Card;
