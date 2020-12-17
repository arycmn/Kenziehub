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
    width: 40%;
    background: #bfcbb6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    font-size: 20px;
    .header {
      height: 5%;
      width: 100%;
      border: none;
      font-size: 18px;
      font-weight: bold;
      padding: 5px;
      border-radius: 20px;
      text-align: center;
      justify-content: center;
    }
    .content {
      height: 95%;
      width: 100%;
      padding: 10px 5px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 540px) {
        flex-direction: column;
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
      @media (max-width: 540px) {
        width: 200px;
        height: 200px;
      }

      @media (max-width: 425px) {
        width: 150px;
        height: 150px;
      }
    }

    form {
      width: 50%;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      border-radius: 20px;

      @media (max-width: 540px) {
        width: 70%;
      }

      @media (max-width: 425px) {
        width: 100%;
      }

      div {
        width: 80%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4 {
          font-weight: bold;
          margin: 0px;
        }

        input {
          width: 100%;
          height: 60%;
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
            height: 50%;
            font-size: 0.8em;
          }
        }

        select {
          width: 100%;
          height: 40%;
          border-radius: 5px;
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
          height: 20%;
          font-size: 0.8em;
          text-align: center;
          margin: 0;
        }
      }

      button {
        height: 50%;
        width: 50%;
        border-radius: 10px;
        background: #006c5f;
        border: none;
        color: white;
        font-size: 1em;

        :hover {
          background: #7fab99;
          color: black;
        }

        @media (max-width: 425px) {
          width: 70%;
          height: 60%;
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
  align-self: center;
  border: none;
  max-width: 60%;
  :hover {
    cursor: pointer;
    background-color: #609c8b;
  }
`;
