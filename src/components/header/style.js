import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgb(255, 174, 66);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
`;

export const Box = styled.span`
  font-size: 20px;
  margin: 3% 3% 3% 30%;
  background-color: rgb(255, 174, 66);

  button {
    background-color: rgb(255, 174, 66);
    border: none;
    cursor: pointer;
    transition: all 0.5s;
    :hover {
      color: #f2e8cf;
      transform: scale(1.2);
    }
  }
`;

export const Navegation = styled.span`
  display: flex;
  justify-content: right;
`;
