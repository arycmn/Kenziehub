import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 400px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img.attrs({
  src: "https://picsum.photos/200/200",
})``;

export const Title = styled.h1`
  color: lightblue;
`;

export const Phrase = styled.p`
  font-size: 20px;
  color: yellow;
`;
export const Login = styled.button``;

export const Register = styled.button``;
