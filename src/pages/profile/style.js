import styled from "styled-components";

export const Container = styled.div`
  margin: 10%;
  width: 700px;
  background: rgba(209, 16, 29, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10%;
  padding: 3%;
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
  background: rgba(209, 16, 29, 0);
`;

export const Info = styled.h3`
  background: rgba(209, 16, 29, 0);
  font: 400 1.2rem;
  color: black;
  opacity: 0.5;

  a {
    text-decoration: none;
    color: inherit;
    background: #d1101d;
    opacity: 0.5;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const ProfileButton = styled.button`
  background: rgba(209, 16, 29, 0);
`;

export const Bio = styled.p`
  font: 400 1rem Roboto, sans-serif;
  color: #333;
  margin: 10px 0;
  background: rgba(209, 16, 29, 0);
`;
export const ChangeInfo = styled.button`
  border: none;
  border-radius: 15%;
  font-size: 100%;
  padding: 2%;
  :hover {
    color: #d1101d;
  }
`;

export const Tech = styled.p`
  font: 400 1.3rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20%;
  font-size: 150%;
  padding: 1%;

  p {
    text-align: center;
    margin: 10px 0;
  }
`;
