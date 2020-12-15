import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgb(255, 174, 66);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
`;

export const Box = styled.span`
  font-size: 20px;
  margin: 3% 3% 3% 30%;
  background-color: rgb(255, 174, 66);
  button {
    background-color: rgb(255, 174, 66);
    border: none;
    :hover {
      cursor: pointer;
      color: rgb(255, 204, 138);
      border-radius: 10px;
    }
  }
`;

export const Navegation = styled.span`
  display: flex;
  justify-content: right;
`;
