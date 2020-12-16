import { StyledPopup } from "./styled";
import { ViewDescriptionButton } from "../../pages/profile/style";

const ViewDescription = ({ description }) => {
  return (
    <StyledPopup
      trigger={(open) => (
        <ViewDescriptionButton className="button">
          <img
            src="https://img.icons8.com/bubbles/100/000000/info.png"
            alt="info"
          />
        </ViewDescriptionButton>
      )}
      position="top center"
      closeOnDocumentClick
      on={["hover", "focus"]}
    >
      <div className="content">
        <h5>Descrição</h5>
        <div>{description}</div>
      </div>
    </StyledPopup>
  );
};

export default ViewDescription;
