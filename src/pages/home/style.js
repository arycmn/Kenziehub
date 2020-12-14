import styled, { createGlobalStyle } from "styled-components";

export const TitleFont = createGlobalStyle`
  @font-face {
    font-family: 'Offside', cursive;
  src: url("https://fonts.googleapis.com/css2?family=Offside&display=swap");
}`;

export const Container = styled.div`
  background-color: #ffebd4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10%;
`;

export const Logo = styled.div`
  background-image: url(${(props) => props.image});

  background-size: cover;
  width: 850px;
  height: 620px;
  object-fit: fill;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const Title = styled.div`
  color: #d1101d;
  position: right;
  align-items: center;
  font-size: 400%;
  padding: 10%;
  font-family: "Offside";
`;

export const Phrase = styled.div`
  font-size: 20px;
  color: #006c5f;
  padding: 5%;
  text-align: center;
`;

export const ButtonsPlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Login = styled.button`
  background-color: #7fab99;
  height: 80%;
  height: 60%;
  margin: 10%;
  padding: 10%;
  border-radius: 15%;
  font-family: "Offside";
  font-size: 100%;
`;

export const Register = styled.button`
  background-color: #ffae42;
  height: 80%;
  height: 60%;
  margin: 10%;
  padding: 10%;
  border-radius: 15%;
  font-family: "Offside";
  font-size: 100%;
`;
