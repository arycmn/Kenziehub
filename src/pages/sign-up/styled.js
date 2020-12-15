import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffebd4;
  background-image: url(${(props) => props.image});
  background-size: 50%;
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: rigth;
  margin: 0 10%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3%;
  width: 30%;
  height: 30%;
  text-align: center;
`;

export const PageSignIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  width: 30%;
  height: 30%;
  text-align: center;
`;

export const FormSignIn = styled.form`
  width: 130%;
  height: 70%;
  background: #006c5f;
  opacity: 0.5;
  border-radius: 10px;
  margin: 0%;
  padding: 10% 0;
`;

export const ErrorParagraph = styled.p`
  color: white;
  font-weight: bold;
  margin-bottom: 3%;
`;

export const SelectSign = styled.select`
  outline: none;
  padding: 3%;
  color: #006c5f;
  :hover {
    cursor: pointer;
    background: white;
    color: #006c5f;
  }
`;

export const InfoSign = styled.div`
  text-align: center;
  width: 100%;
  height: 20%;
  font-weight: bolder;
  color: black;
`;

export const InputSign = styled.input`
  width: 70%;
  height: 70%;
  font-size: 100%;
  padding: 3%;
  outline: none;
`;

export const ButtonSign = styled.button`
  width: 30%;
  font-size: 100%;
  font-family: "Offside";
  background: #006c5f;
  border-radius: 15px;
  padding: 3%;
  color: white;
  outline: none;
  border: black 2px;
  :hover {
    cursor: pointer;
    background: black;
    color: white;
  }
`;
