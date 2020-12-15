import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Field = styled.p`
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;

  span {
    margin-top: 5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #fff;
  font: 400 1rem;
`;

export const Bio = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #fff;
  resize: none;
  font: 400 1rem;
`;

export const Options = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #fff;
  font: 400 1rem;
`;

export const Title = styled.label`
  font: 400 1rem Roboto, sans-serif;
`;

export const Avatar = styled.div`
  margin: 0 auto;

  label {
    img {
      border-radius: 50%;
      display: block;
      width: 150px;
      height: 150px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 5px;
      margin: 0 auto;
      cursor: pointer;
    }
  }

  input {
    display: none;
  }
`;

export const SubmitButton = styled.button`
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

export const Form = styled.form`
  margin: 3%;
  min-width: 700px;
  max-width: 850px;
  background: rgba(255, 174, 66, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10%;
  padding: 7% 3%;
`;
