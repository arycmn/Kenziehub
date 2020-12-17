import styled from "styled-components";
import Popup from "reactjs-popup";
import { ButtonCloseLog } from "../login/styled";

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
    height: 70%;
    width: 70%;
    background: #ffebd4;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;

    @media (max-width: 425px) {
      width: 90%;
      height: 80%;
    }
    .modal {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .header {
        width: 100%;
        height: 5%;
      }
      .content {
        height: 95%;
        width: 90%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        font-size: 1.1em;
      }
    }
  }
`;

export const ButtonCloseSign = styled(ButtonCloseLog)`
  background: #7fab99;
  :hover {
    background: #006c5f;
  }
`;

export const Image = styled.img`
  width: 492px;
  height: 330px;

  @media (max-width: 1440px) {
    width: 442px;
    height: 297px;
  }

  @media (max-width: 1280px) {
    width: 393px;
    height: 264px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  height: 80%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const FormSignIn = styled.form`
  width: 100%;
  height: 100%;
  background: #bfcbb6;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.div`
  width: 50%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Line = styled(Column)`
  width: 100%;
  height: 20%;
`;

export const SelectSign = styled.select`
  height: 40%;
  width: 90%;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px;
  font-size: 1em;
  color: #006c5f;
  margin-top: 5px;
  :hover {
    cursor: pointer;
    background: #7fab99;
    color: white;
    font-weight: bold;
  }
  @media (max-width: 280px) {
    font-size: 0.7em;
  }
`;

export const InfoSign = styled.div`
  text-align: center;
  width: 90%;
  height: 20%;
  font-weight: bold;
  color: #006c5f;
  font-size: 1em;

  @media (max-width: 425px) {
    font-size: 0.8em;
  }
  @media (max-width: 280px) {
    font-size: 0.5em;
  }
`;

export const InputSign = styled.input`
  width: 90%;
  height: 40%;
  font-size: 0.8em;
  padding: 10px;
  margin-top: 5px;
  outline: none;
  border-radius: 5px;
  border: none;

  :hover {
    background: #7fab99;
  }

  :focus {
    background: #7fab99;
  }
  @media (max-width: 280px) {
    font-size: 0.5em;
  }
`;

export const ErrorParagraph = styled.p`
  height: 20%;
  color: #006c5f;
  font-weight: bold;
  font-size: 0.8em;

  @media (max-width: 1440px) {
    font-size: 0.6em;
    text-align: center;
  }

  @media (max-width: 1280px) {
    font-size: 0.6em;
    text-align: center;
  }

  @media (max-width: 425px) {
    font-size: 0.5em;
    text-align: center;
  }
`;

export const ButtonSign = styled.button`
  width: 30%;
  height: 50%;
  font-size: 1em;
  font-family: "Offside";
  background: #7fab99;
  border-radius: 15px;
  color: white;
  outline: none;
  border: none;

  :hover {
    cursor: pointer;
    background: #006c5f;
    color: white;
  }
  @media (max-width: 540px) {
    width: 50%;
  }
  @media (max-width: 425px) {
    width: 50%;
  }
  @media (max-width: 280px) {
    width: 80%;
  }
`;
