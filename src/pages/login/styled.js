import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffebd4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8%;
`;
export const PageLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 200%;
  height: 80%;
  margin-top: 0%;
`;

export const FormLogin = styled.form`
  width: 100%;
  height: 200%;
  background: #d1101d;
  opacity: 0.5;
  border-radius: 10px;
  margin: 0 15%;
  padding: 40% 0;
`;

export const InfoLog = styled.div`
  text-align: center;
  /* width: 200%;
  height: 50%; */
`;

export const InputLog = styled.input`
  width: 50%;
  height: 50%;
  outline: none;
`;
export const Image = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 750px;
  height: 600px;
  object-fit: fill;
`;

export const ButtonLog = styled.button`
  width: 25%;
  height: 12.5%;

  outline: none;
  border: none;
  :hover {
    cursor: pointer;
    background: black;
    color: white;
  }
`;
