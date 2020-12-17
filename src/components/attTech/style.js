import Popup from "reactjs-popup";
import styled from "styled-components";

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
  }
  // use your custom style for ".popup-content"
  &-content {
    width: fit-content;
    max-height: 90%;
    border-radius: 10px;
    img {
      max-width: 90%;
    }
    .content {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }
    .close {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
  }
`;

export default StyledPopup;
