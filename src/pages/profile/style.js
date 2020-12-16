import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

export const Box = styled.div`
  background: rgba(255, 174, 66, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10%;
  padding: 10px;
  height: 80%;
  width: 50%;
  hr {
    margin: 5px;
    border: none;
    border-top: 0.5px solid rgb(255, 174, 66);
  }
  @media (max-width: 1440px) {
    width: 60%;
  }
  @media (max-width: 1280px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #000;
  padding: 2px;
`;

export const Name = styled.h1`
  font: 700 2rem;
  padding: 10px;
  background: rgba(255, 174, 66, 0);
`;

export const InfoContact = styled.div`
  font-size: 1.3em;
  background: rgba(255, 174, 66, 0);
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    text-decoration: none;
    color: #006c5f;

    :hover {
      text-decoration: underline;
    }
  }

  hr {
    border: none;
    border-top: 0.5px solid rgb(255, 174, 66);
  }
  h3 {
    color: #3f403a;
  }
  h5 {
    text-align: center;
  }
`;

export const Info = styled(InfoContact)`
  flex-direction: column;
`;

export const ProfileButton = styled.button`
  background: rgba(255, 174, 66, 0);
`;

export const Bio = styled.p`
  font-size: 120%;
`;

export const ChangeInfo = styled.button`
  border: none;
  border-radius: 15px;
  font-size: 100%;
  padding: 10px;
  background: rgba(255, 174, 66);
  max-width: 100%;

  :hover {
    cursor: pointer;
    background-color: #d1101d;
    color: white;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 174, 66, 0);
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 5px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 10px;
  align-items: center;

  h2 {
    width: 100%;
    border-bottom: 1px solid #ffae42;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;

export const Techs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Works = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 650px;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  border: none;
  transition: all 0.5s;
  cursor: pointer;
  background: rgba(255, 174, 66, 0);
  :hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    color: white;
  }
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    margin: 0 5px 0 0;
  }
`;

export const ViewDescriptionButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    color: white;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;
