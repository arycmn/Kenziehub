import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopup = styled(Popup)`
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
        font-size: 120%;
      }
    }
  }
`;

export const ButtonCloseLog = styled.button`
  width: 32px;
  height: 32px;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
  background: #ff9d89;
  color: #ffebd4;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background: #d1101d;
    color: white;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffebd4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 120%;
`;

export const FormContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3%;
  text-align: center;
`;

export const FormLogin = styled.form`
  width: 100%;
  height: 100%;
  background: #ff9d89;
  border-radius: 10px;
  padding: 10px 0;
`;

export const InfoLog = styled.div`
  text-align: center;
  width: 100%;
  height: 20%;
  font-weight: bolder;
  color: #d1101d;
  background: #ff9d89;
`;
export const InputLog = styled.input`
  width: 70%;
  height: 20%;
  font-size: 100%;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;

  :hover {
    background: #ffcc8a;
  }

  :focus {
    background: #ffcc8a;
  }
`;
export const Image = styled.img`
  width: 370px;
  height: 235px;
`;
export const ErrorParagraph = styled.p`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  background: #d1101d;
`;

export const ButtonLog = styled.button`
  width: 30%;
  font-size: 100%;
  font-family: "Offside";
  background: #ff503f;
  border-radius: 15px;
  padding: 3%;
  color: white;
  outline: none;
  border: none;
  :hover {
    cursor: pointer;
    background: #d1101d;
    color: white;
  }
`;
