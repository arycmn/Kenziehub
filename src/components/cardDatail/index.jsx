import {
  Container,
  Card,
  Image,
  Name,
  Email,
  CourseModule,
  Bio,
  Contact,
} from "./styled";

const CardDetail = ({ user }) => {
  const imageDefault =
    "https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png";

  return (
    <Container>
      {user.map(
        ({ name, email, course_module, bio, contact, avatar_url }, index) => (
          <Card key={index}>
            {avatar_url !== null ? (
              <Image alt={name} src={avatar_url} />
            ) : (
              <Image alt={name} src={imageDefault} />
            )}

            <Name>{name}</Name>
            <Email>{email}</Email>
            <CourseModule>{course_module}</CourseModule>
            <Bio>{bio}</Bio>
            <Contact>{contact} </Contact>
          </Card>
        )
      )}
    </Container>
  );
};

export default CardDetail;
