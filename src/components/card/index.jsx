import { Container } from "./style";

const Card = ({ user }) => {
  const imageDefault =
    "https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png";

  return (
    <Container>
      {user.map(
        ({ name, email, course_module, bio, contact, avatar }, index) => (
          <div key={index}>
            {{ avatar } !== null ? (
              <img alt={name} src={avatar} />
            ) : (
              <img alt={name} src={imageDefault} />
            )}

            <h1>{name}</h1>
            <h3>{email}</h3>
            <h3>{course_module}</h3>
            <h4>{bio}</h4>
            <h5>{contact} </h5>
          </div>
        )
      )}
    </Container>
  );
};

export default Card;
