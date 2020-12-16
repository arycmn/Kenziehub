import Card from "../card";

const CardContainer = ({ input, filteredUsers, devs }) => {
  return (
    <div>
      <>{input === "" ? <Card user={devs} /> : <Card user={filteredUsers} />}</>
    </div>
  );
};

export default CardContainer;
