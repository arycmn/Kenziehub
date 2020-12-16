import styled from "styled-components";
import Popup from "reactjs-popup";
import { ButtonCloseLog } from "../login/styled";

export const StyledPopup = styled(Popup)`
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
`;

export const FormContainer = styled.div`
  width: 50%;
  height: 80%;
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
  width: 90%;
  color: #006c5f;
  outline: none;
  font-size: 1em;
  :hover {
    cursor: pointer;
    background: white;
    color: #006c5f;
  }
`;

export const InfoSign = styled.div`
  text-align: center;
  width: 90%;
  height: 20%;
  font-weight: bold;
  color: #006c5f;
  font-size: 1em;
`;

export const InputSign = styled.input`
  width: 90%;
  height: 40%;
  font-size: 0.8em;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border: none;

  :hover {
    background: #7fab99;
  }

  :focus {
    background: #7fab99;
  }
`;

export const ErrorParagraph = styled.p`
  height: 20%;
  color: #006c5f;
  font-weight: bold;
  font-size: 0.8em;
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
`;
