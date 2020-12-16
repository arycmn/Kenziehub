import { CardContent, Image, Name, CourseModule } from "./style";

import SaibaMais from "../saiba-mais";

const Card = ({ user }) => {
  const imageProfile =
    "https://img.icons8.com/clouds/500/000000/test-account.png";

  return (
    <>
      {user.map((uniqueUser, index) => (
        <CardContent key={index}>
          {uniqueUser.avatar_url !== null ? (
            <Image alt={uniqueUser.name} src={uniqueUser.avatar_url} />
          ) : (
            <Image alt={uniqueUser.name} src={imageProfile} />
          )}
          <Name>{uniqueUser.name}</Name>
          <CourseModule>{uniqueUser.course_module}</CourseModule>
          <SaibaMais user={uniqueUser} imageDefault={imageProfile} />
        </CardContent>
      ))}
    </>
  );
};

export default Card;
