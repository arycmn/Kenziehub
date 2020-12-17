import Popup from "reactjs-popup";
import styled from "styled-components";

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  @keyframes anvil {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    1% {
      transform: scale(0.96) translateY(10px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }
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
