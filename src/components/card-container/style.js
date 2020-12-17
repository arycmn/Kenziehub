import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  visibility: hidden;

  > * {
    visibility: visible;
  }
  > * {
    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms;
  }
  :hover > * {
    opacity: 0.4;
    transform: scale(0.9);
  }
  *:hover {
    opacity: 1;
    transform: scale(1);
    transition-delay: 0ms, 0ms;
  }
`;
