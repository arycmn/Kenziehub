import {
  Container,
  StyledCard,
  Image,
  Name,
  Email,
  CourseModule,
  Bio,
  Contact,
} from "./style";

const Card = ({ user }) => {
  const imageDefault =
    "https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png";

  return (
    <Container>
      {user.map(
        ({ name, email, course_module, bio, contact, avatar }, index) => (
          <StyledCard key={index}>
            {{ avatar } !== null ? (
              <Image alt={name} src={avatar} />
            ) : (
              <Image alt={name} src={imageDefault} />
            )}

            <Name>{name}</Name>
            <Email>{email}</Email>
            <CourseModule>{course_module}</CourseModule>
            <Bio>{bio}</Bio>
            <Contact>{contact} </Contact>
          </StyledCard>
        )
      )}
    </Container>
  );
};

export default Card;
