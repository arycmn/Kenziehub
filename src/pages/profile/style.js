import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  margin: 3%;
  min-width: 700px;
  background: rgba(255, 174, 66, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10%;
  padding: 7% 3%;
  /* border: 5px solid rgb(209, 16, 29); */
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #000;
  padding: 2px;
  margin: 5%;
`;

export const Name = styled.h1`
  font: 700 2rem;
  background: rgba(255, 174, 66, 0);
  padding: 10px;
`;

export const Info = styled.div`
  font: 400 1.2rem;
  color: black;
  opacity: 0.5;
  padding: 10px;
  font-size: 130%;
  background: rgba(255, 174, 66, 0);

  a {
    text-decoration: none;
    color: inherit;

    background: rgba(255, 174, 66, 0);
    opacity: 0.5;
    :hover {
      text-decoration: underline;
    }
  }
  div {
    background: rgba(255, 174, 66, 0);
  }
  p {
    background: rgba(255, 174, 66, 0);
  }
`;

export const ProfileButton = styled.button`
  background: rgba(255, 174, 66, 0);
`;

export const Bio = styled.p`
  font: 400 1rem Roboto, sans-serif;
  color: #333;
  margin: 10px 0;
  background: rgba(255, 174, 66, 0);
`;
export const ChangeInfo = styled.button`
  border: none;
  border-radius: 15px;
  font-size: 100%;
  padding: 2%;
  background: rgba(255, 174, 66);
  max-width: 100%;

  :hover {
    cursor: pointer;
    background-color: #d1101d;
    color: white;
  }
`;
export const ButtonsDiv = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  background: rgba(255, 174, 66, 0);
  width: inherit;
  padding: 10px;
`;
export const Tech = styled.div`
  font: 400 1.3rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px;
  padding: 10px;
  align-items: center;
  background: rgba(255, 174, 66, 0);

  p {
    text-align: center;
    background: rgba(255, 174, 66, 0);
  }
`;
export const Techs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  min-width: 650px;
  background: rgba(255, 174, 66, 0);
`;
export const Works = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 650px;
  background: rgba(255, 174, 66, 0);
`;
export const Button = styled.button`
  border: none;
  background: rgba(255, 174, 66, 0);
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;
