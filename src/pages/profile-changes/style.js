import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 50%;
  height: 80%;
  background: #ffcc8a;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5%;

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;

export const Field = styled.div`
  height: 15%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    font-size: 0.8em;
  }

  @media (max-width: 360px) {
    font-size: 0.8em;
  }
`;

export const LineButton = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LineAvatar = styled(LineButton)`
  height: 20%;
`;

export const Input = styled.input`
  height: 40%;
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #ffebd4;
  font-size: 1em;

  @media (max-width: 360px) {
    font-size: 0.8em;
  }

  :hover {
    background: #ffae42;
  }

  :focus {
    background: #ffae42;
    font-weight: bold;
  }
`;

export const Bio = styled.textarea`
  height: 40%;
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #ffebd4;
  resize: none;
  font-size: 1em;

  @media (max-width: 1280px) {
    font-size: 0.8em;
  }
  @media (max-width: 360px) {
    font-size: 0.7em;
  }

  :hover {
    background: #ffae42;
  }

  :focus {
    background: #ffae42;
    font-weight: bold;
  }
`;

export const Options = styled.select`
  width: 90%;
  height: 40%;

  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #ffebd4;
  font-size: 1em;

  @media (max-width: 425px) {
    font-size: 0.7em;
  }
  @media (max-width: 360px) {
    font-size: 0.6em;
  }

  :hover {
    background: #ffae42;
  }

  :focus {
    background: #ffae42;
    font-weight: bold;
  }
`;

export const Title = styled.div`
  height: 20%;
  font: 1em Roboto, sans-serif;
  font-weight: bold;
  color: #3f403a;
`;

export const Avatar = styled.div`
  width: 125px;
  height: 125px;

  @media (max-width: 1280px) {
    padding-top: 15px;
  }

  @media (max-width: 540px) {
    padding-top: 15px;
  }

  @media (max-width: 425px) {
    padding-top: 20px;
  }

  label {
    img {
      border-radius: 50%;
      display: block;
      width: 125px;
      height: 125px;
      border: 2px solid rgba(0, 0, 0, 0.2);
      background: #ffae42;
      padding: 2.5px;
      margin: 0 auto;
      cursor: pointer;

      @media (max-width: 425px) {
        height: 100px;
        width: 100px;
      }

      :hover {
        filter: invert(15%);
      }
    }
  }

  input {
    display: none;
  }
`;

export const Error = styled.p`
  height: 20%;
  font-weight: bold;
  color: #3f403a;
  margin: 0;
`;

export const SubmitButton = styled.button`
  width: 10%;
  height: 50%;
  border: none;
  border-radius: 5px;
  font-size: 100%;
  background: rgba(255, 174, 66);
  max-width: 100%;

  :hover {
    cursor: pointer;
    background-color: #006c5f;
    color: white;
  }

  @media (max-width: 540px) {
    width: 20%;
  }

  @media (max-width: 425px) {
    width: 30%;
  }
`;
