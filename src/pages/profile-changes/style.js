import styled from "styled-components";

export const Container = styled.div`
  width: 700px;
  height: 700px;
  background: #a6c6c2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font: 400 1rem Roboto, sans-serif;
`;

export const Bio = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #fff;
  resize: none;
  font: 400 1rem Roboto, sans-serif;
`;

export const Options = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #fff;
  font: 400 1rem Roboto, sans-serif;
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
  width: 100%;
  padding: 10px;
  margin: 10px auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font: 400 1.2rem Roboto, sans-serif;
  background: #0f0;
`;

export const Form = styled.form``;
