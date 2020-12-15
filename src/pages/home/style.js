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

export const Teste = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.div`
  color: #d1101d;
  position: right;
  align-items: center;
  font-size: 4em;
  font-family: "Offside";
  transition: all 0.5s;
  height: 30%;
  user-select: none;

  :hover {
    transform: scale(1.2);
  }
`;

export const Phrase = styled.div`
  font-size: 20px;
  color: #006c5f;
  padding: 5%;
  text-align: center;
  width: 75%;
  height: 40%;
`;

export const ButtonsPlace = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 25%;
  width: 100%;
`;

export const Login = styled.button`
  background-color: #ffae42;
  color: #ffebd4;
  height: 30%;
  width: 20%;
  margin: 20px;
  border-radius: 5px;
  font-family: "Offside";
  font-size: 120%;
  transition: all 0.6s;
  border: none;

  :hover {
    cursor: pointer;
    background: #7fab99;

    transform: scale(1.1);
  }
`;

export const Register = styled(Login)`
  background: #7fab99;

  :hover {
    cursor: pointer;
    background-color: #ffae42;
  }
`;
