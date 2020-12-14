import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 400px;
  background: #a6c6c2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #000;
  padding: 2px;
`;

export const Name = styled.p`
  font: 700 2rem Roboto, sans-serif;
`;

export const Info = styled.p`
  font: 400 1.2rem Roboto, sans-serif;
  color: #333;

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const Bio = styled.p`
  font: 400 1rem Roboto, sans-serif;
  color: #333;
  margin: 10px 0;
`;

export const Tech = styled.p`
  font: 400 1.3rem Roboto, sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    margin: 10px 0;
  }
`;
