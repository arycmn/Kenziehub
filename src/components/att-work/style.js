import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopup = styled(Popup)`
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
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-content {
    height: 50%;
    width: 50%;
    background: #bfcbb6;
    border-radius: 10px;
    display: flex;
    align-items: center;
    animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;

    @media (max-width: 1440px) {
      width: 70%;
    }

    @media (max-width: 1280px) {
      width: 90%;
    }
    @media (max-width: 768px) {
      width: 90%;
    }

    @media (max-width: 540px) {
      height: fit-content;
      flex-direction: column;
      .header img {
        width: 30%;
      }
    }

    font-size: 20px;

    .header {
      display: flex;
      flex-direction: column;
      width: 100%;
      border: none;
      font-size: 18px;
      text-align: center;
      padding: 5px;
      border-radius: 20px;
      align-items: center;

      div {
        font-weight: bold;
      }
    }
    .content {
      width: 80%;
      padding: 10px 5px;
      border-radius: 20px;
      text-align: center;
    }
    .actions {
      width: 100%;
      padding: 10px 5px;
      margin: auto;
      border-radius: 20px;
      text-align: center;
      color: black;
    }
    .close {
      cursor: pointer;
      position: absolute;
      display: block;
      padding: 2px 5px;
      line-height: 20px;
      right: -10px;
      top: -10px;
      font-size: 30px;
      font-family: "offside";
      border-radius: 10px;
      border: 1px solid;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3%;
      border-radius: 20px;
      text-align: center;

      input {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: none;
        text-align: center;
        :hover {
          background: #7fab99;
        }

        :focus {
          background: #7fab99;
        }
      }

      textarea {
        width: 100%;
        resize: none;
        height: 100px;
        border-radius: 10px;
        border: none;
        text-align: center;
        :hover {
          background: #7fab99;
        }

        :focus {
          background: #7fab99;
        }
      }

      button {
        width: 50%;
        margin-top: 20px;
        padding: 18px;
        border-radius: 10px;
        background: #006c5f;
        border: none;
        box-sizing: content-box;
        color: white;

        :hover {
          color: black;
          background: #7fab99;
        }
      }
    }
  }
`;

export const AddButton = styled.button`
  font-size: 20px;
  border-radius: 20px;
  padding: 5px;
  margin: 1%;
  font-size: 90%;
  border: none;
  align-self: center;
  box-sizing: content-box;

  :hover {
    cursor: pointer;
    background-color: #609c8b;
  }
`;
