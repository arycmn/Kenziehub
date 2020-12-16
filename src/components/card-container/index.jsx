import Card from "../card";
import { Box } from "./style";

const CardContainer = ({ input, filteredUsers, devs }) => {
  return (
    <Box>
      <>{input === "" ? <Card user={devs} /> : <Card user={filteredUsers} />}</>
    </Box>
  );
};

export default CardContainer;
