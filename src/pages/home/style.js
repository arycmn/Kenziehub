import styled, { createGlobalStyle } from "styled-components";

export const TitleFont = createGlobalStyle`
  @font-face {
    font-family: 'Offside', cursive;
  src: url("https://fonts.googleapis.com/css2?family=Offside&display=swap");
}`;

export const Container = styled.div`
  height: 100vh;
  background-color: #ffebd4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 722.5px;
  height: 527px;
`;

export const Menu = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.div`
  color: #d1101d;
  position: right;
  display: flex;
  align-items: flex-end;
  font-size: 4em;
  font-family: "Offside";
  transition: all 0.5s;
  height: 50%;
  user-select: none;

  :hover {
    transform: scale(1.2);
  }
`;

export const Phrase = styled.div`
  font-size: 20px;
  color: #006c5f;
  padding: 0 50px;
  text-align: center;
  width: 75%;
  height: 35%;
  display: flex;
  align-items: center;
`;

export const ButtonsPlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
`;

export const Login = styled.button`
  background-color: #ffae42;
  color: #ffebd4;
  height: 35%;
  width: 22.5%;
  margin-right: 20px;
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
