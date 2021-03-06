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
    background: #ffebd4;
    border-radius: 10px;
    display: flex;
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

export const FormContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 540px) {
    height: 70%;
    width: 90%;
  }

  @media (max-width: 425px) {
    height: 60%;
    width: 100%;
  }
`;

export const FormLogin = styled.form`
  width: 100%;
  height: 80%;
  background: #ff9d89;
  border-radius: 10px;
  padding: 10px 0;

  @media (max-width: 1280px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    height: 70%;
    width: 90%;
  }
  @media (max-width: 425px) {
    height: 80%;
  }
`;

export const Column = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Line = styled(Column)`
  height: 20%;
`;

export const InfoLog = styled.div`
  text-align: center;
  width: 90%;
  height: 20%;
  font-weight: bolder;
  color: #d1101d;
  background: #ff9d89;

  @media (max-width: 425px) {
    font-size: 0.9em;
  }
`;
export const InputLog = styled.input`
  width: 90%;
  height: 50%;
  font-size: 100%;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-top: 5px;

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

  @media (max-width: 1280px) {
    width: 444px;
    height: 282px;
  }
  @media (max-width: 768px) {
    width: 296px;
    height: 188px;
  }
  @media (max-width: 425px) {
    width: 259px;
    height: 164px;
  }

  @media (max-width: 280px) {
    width: 233px;
    height: 147px;
  }
`;

export const ErrorParagraph = styled.p`
  height: 10%;
  color: #d1101d;
  font-size: 0.8em;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 425px) {
    font-size: 0.6em;
  }
`;

export const ButtonLog = styled.button`
  height: 70%;
  width: 30%;
  font-size: 100%;
  font-family: "Offside";
  background: #ff503f;
  border-radius: 15px;
  color: white;
  outline: none;
  border: none;
  :hover {
    cursor: pointer;
    background: #d1101d;
    color: white;
  }
  @media (max-width: 280px) {
    font-size: 0.8em;
  }
`;
