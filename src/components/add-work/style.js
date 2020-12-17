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
    flex-direction: column;
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
      height: 90%;
    }

    @media (max-width: 425px) {
      height: 80%;
    }

    .header {
      height: 5%;
      width: 100%;
      border: none;
      font-size: 1em;
      text-align: center;
      font-weight: bold;
      padding: 5px;
      border-radius: 20px;
      align-items: center;

      @media (max-width: 540px) {
        height: 80%;
      }
    }
    .content {
      height: 95%;
      width: 80%;
      padding: 10px 5px;
      border-radius: 20px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 540px) {
        flex-direction: column;
        height: 80%;
      }
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

    img {
      width: 350px;
      height: 350px;

      @media (max-width: 768px) {
        width: 250px;
        height: 250px;
      }

      @media (max-width: 425px) {
        width: 125px;
        height: 125px;
      }
    }

    form {
      height: 80%;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 20px;
      text-align: center;

      @media (max-width: 540px) {
        width: 90%;
      }

      @media (max-width: 425px) {
        width: 80%;
      }

      label {
        font-weight: bold;
        @media (max-width: 425px) {
          font-size: 0.8em;
        }
      }

      input {
        width: 100%;
        height: 30%;
        padding: 10px;
        border-radius: 10px;
        border-color: #ddbea9;
        padding: 10px;
        outline: none;
        border: none;

        :hover {
          background: #7fab99;
        }

        :focus {
          background: #7fab99;
        }

        @media (max-width: 425px) {
          font-size: 0.8em;
        }
      }

      p {
        height: 10%;

        @media (max-width: 425px) {
          font-size: 0.6em;
        }
      }

      button {
        height: 25%;
        width: 50%;
        border-radius: 10px;
        background: #006c5f;
        border: none;
        box-sizing: content-box;
        color: white;
        :hover {
          background: #7fab99;
          color: black;
        }

        @media (max-width: 425px) {
          height: 50%;
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
