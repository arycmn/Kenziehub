import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 3.5%;
  align-content: center;
  button {
    border: none;
    background-color: transparent;
  }
`;

export const SearchArea = styled.div`
  width: 100%;
  padding: 30px;
`;

export const Input = styled.input`
  width: 30%;
  font-size: 120%;
`;

export const Button = styled.button`
  img {
    width: 70px;
    height: 70px;
    background: #ffebd4;
    border-radius: 25px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
  width: 70px;
  height: 70px;
  border-radius: 25px;
  font-size: 20px;
  letter-spacing: 2px;
  transition: 1s box-shadow;

  :hover {
    box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.1);
  }

  :hover::before,
  :hover::after {
    display: block;
    content: "";
    position: absolute;
    width: 70px;
    height: 70px;
    background: #006c5f;
    border-radius: 25px;
    z-index: -1;
    animation: 1s clockwise infinite;
  }

  :hover:after {
    background: #bfcbb6;
    animation: 2s counterclockwise infinite;
  }

  @keyframes clockwise {
    0% {
      top: -5px;
      left: 0;
    }
    12% {
      top: -2px;
      left: 2px;
    }
    25% {
      top: 0;
      left: 5px;
    }
    37% {
      top: 2px;
      left: 2px;
    }
    50% {
      top: 5px;
      left: 0;
    }
    62% {
      top: 2px;
      left: -2px;
    }
    75% {
      top: 0;
      left: -5px;
    }
    87% {
      top: -2px;
      left: -2px;
    }
    100% {
      top: -5px;
      left: 0;
    }
  }

  @keyframes counterclockwise {
    0% {
      top: -5px;
      right: 0;
    }
    12% {
      top: -2px;
      right: 2px;
    }
    25% {
      top: 0;
      right: 5px;
    }
    37% {
      top: 2px;
      right: 2px;
    }
    50% {
      top: 5px;
      right: 0;
    }
    62% {
      top: 2px;
      right: -2px;
    }
    75% {
      top: 0;
      right: -5px;
    }
    87% {
      top: -2px;
      right: -2px;
    }
    100% {
      top: -5px;
      right: 0;
    }
  }

  @keyframes hoverPop {
    0%,
    100% {
      transform: scale(1);
    }
    33% {
      transform: scale(1.05);
    }
    66% {
      transform: scale(0.9);
    }
  }

  @keyframes slick-hover {
    0.00% {
      transform: translateY(20px) translateX(20px);
    }
    16.67% {
      transform: translateY(-13px) translateX(-9px);
    }
    33.33% {
      transform: translateY(4px) translateX(12px);
    }
    50.00% {
      transform: translateY(20px) translateX(-20px);
    }
    66.67% {
      transform: translateY(-3px) translateX(8px);
    }
    83.33% {
      transform: translateY(-15px) translateX(-11px);
    }
    100.00% {
      transform: translateY(20px) translateX(20px);
    }
  }

  @keyframes slick-hover-2 {
    0.00% {
      transform: translateY(-20px) translateX(-20px);
    }
    16.67% {
      transform: translateY(3px) translateX(-5px);
    }
    33.33% {
      transform: translateY(18px) translateX(-10px);
    }
    50.00% {
      transform: translateY(-20px) translateX(20px);
    }
    66.67% {
      transform: translateY(15px) translateX(-4px);
    }
    83.33% {
      transform: translateY(-1px) translateX(15px);
    }
    100.00% {
      transform: translateY(-20px) translateX(-20px);
    }
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
`;
