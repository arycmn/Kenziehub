import styled from "styled-components";

export const CardContent = styled.div`
  display: flex;
  background-color: #bfcbb6;
  border-radius: 10px;
  width: 18%;
  max-height: 20%;
  min-height: 20%;
  flex-direction: column;
  text-align: center;
  margin: 12px;
  padding: 10px;
  justify-content: space-between;
`;

export const Image = styled.img`
  position: center;
  align-self: center;
  min-width: 100px;
  max-width: 130px;
  min-height: 100px;
  max-height: 130px;
  border-radius: 50%;
`;

export const Name = styled.h1`
  margin: 5px;
`;

export const CourseModule = styled.div`
  margin: 10px;
`;
