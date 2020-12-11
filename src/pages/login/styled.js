import styled from "styled-components";

export const PageLogin = styled.div`
  width: 100%;
  height: 100%;
  background: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormLogin = styled.form`
  width: 25%;
  height: 40%;
  background: yellow;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoLog = styled.div`
  width: 75%;
  margin-top: 10px;
  text-align: center;
`;

export const InputLog = styled.input`
  width: 75%;
  height: 12.5%;
  margin-top: 10px;
  padding: 10px;
  outline: none;
`;

export const ButtonLog = styled.button`
  width: 25%;
  height: 12.5%;
  margin-top: 10px;
  outline: none;
  border: none;
  :hover {
    cursor: pointer;
    background: black;
    color: white;
  }
`;
