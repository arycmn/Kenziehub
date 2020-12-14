import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffebd4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50%;
  font-size: 120%;
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

export const FormLogin = styled.form`
  width: 100%;
  height: 70%;
  background: #d1101d;
  opacity: 0.5;
  border-radius: 10px;
  margin: 0%;
  padding: 10% 0;
`;

export const InfoLog = styled.div`
  text-align: center;
  width: 100%;
  height: 20%;
  font-weight: bolder;
  color: black;
`;

export const InputLog = styled.input`
  width: 70%;
  height: 70%;
  font-size: 100%;
  padding: 3%;
  outline: none;
`;
export const Image = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 750px;
  height: 470px;
  object-fit: fill;
`;
export const ErrorParagraph = styled.p`
  color: white;
  font-weight: bold;
  margin-bottom: 3%;
`;

export const ButtonLog = styled.button`
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
