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
  &-content {
    width: fit-content;
    max-height: 90%;
    border-radius: 10px;
    background: #ff9d89;

    img {
      max-width: 90%;
    }
    .content {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      form {
        select {
          width: 100%;
          border-radius: 5px;
          border: none;
          background: #ffebd4;

          :hover {
            background: #d1101d;
            color: white;
            font-weight: bold;
          }
        }

        button {
          width: 100%;
          background: #ffebd4;
          outline: none;
          cursor: pointer;
          border: none;
          border-radius: 5px;
          :hover {
            background: #d1101d;
            color: white;
            font-weight: bold;
          }
        }
      }
    }
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;

      div {
        font-weight: bold;
      }
    }
    .close {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
  }
`;

export default StyledPopup;
