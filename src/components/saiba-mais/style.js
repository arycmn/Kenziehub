import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopup = styled(Popup)`
  @keyframes anvil {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    1% {
      transform: scale(0.96) translateY(10px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }

  &-overlay {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-content {
    height: fit-content;
    width: fit-content;
    background: #7fab99;
    border-radius: 10px;
    font-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
    overflow: auto;

    .modal {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column !important;
      justify-content: center;
      align-items: center;

      @media (max-width: 1440px) {
      }

      @media (max-width: 1280px) {
      }
      @media (max-width: 768px) {
        flex-direction: column;
      }

      @media (max-width: 540px) {
        flex-direction: row;
      }

      @media (max-width: 425px) {
        flex-direction: row;
      }

      .header {
        width: 100%;
        height: 15%;
        background: #006c5f;
        border-radius: 10px 10px 0 0;
        border-bottom: 2px solid #bfcbb6;
        font-size: 1.2em;
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        @media (max-width: 640px) {
          width: 100%;
          height: 10%;
          padding: 0;
        }
      }
      .content {
        height: fit-content;
        width: fit-content;
        padding: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: auto;
        ::-webkit-scrollbar {
          height: 8px;
          width: 8px;
        }

        ::-webkit-scrollbar-thumb {
          -webkit-border-radius: 10px;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.2);
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        }
        @media (max-width: 1440px) {
          flex-wrap: wrap;
          width: 80%;
        }

        @media (max-width: 1280px) {
          width: 80%;
          flex-wrap: wrap;
        }
        @media (max-width: 768px) {
          flex-direction: row;
          flex-wrap: wrap;
          height: 80%;
        }

        @media (max-width: 540px) {
          height: 80%;
          flex-direction: row;
          flex-wrap: wrap;
        }

        @media (max-width: 425px) {
          height: 80%;
          flex-direction: row;
          flex-wrap: wrap;
        }
      }
    }
  }
`;

export const ClosePlace = styled.div`
  width: 50%;
  height: 50%;
`;
export const ClosePopUp = styled.button`
  width: 5%;
  height: 50%;
  background: #bfcbb6;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    background: #7fab99;
    color: #ffebd4;
  }
`;

export const TitlePlace = styled(ClosePlace)`
  width: 100%;
  height: 50%;
  text-align: center;
  font-weight: bold;
  color: #ffebd4;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  @media (max-width: 640px) {
    width: 100px;
    height: 100px;
  }
`;

export const LineImg = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LineInfo = styled(LineImg)`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1440px) {
    margin: 2%;
  }

  @media (max-width: 1280px) {
    margin: 2%;
  }
  @media (max-width: 768px) {
    margin: 2%;
  }

  @media (max-width: 540px) {
    margin: 2%;
  }

  @media (max-width: 425px) {
    margin: 2%;
  }

  div {
    width: 90%;
    min-height: 15%;
    display: flex;
    flex-direction: column;
    word-break: break-word;
    align-items: center;
    justify-content: center;
    text-align: center;
    h3 {
      margin: 10 px;
      font-weight: bold;
    }
  }
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    margin: 0;
    font-weight: bold;
  }

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 1440px) {
      width: 80%;
    }

    @media (max-width: 1280px) {
      width: 80%;
    }
    @media (max-width: 768px) {
      flex-direction: colunmn;

      height: 80%;
    }

    @media (max-width: 540px) {
      height: 80%;
      flex-direction: column;
    }

    @media (max-width: 425px) {
      height: 80%;
      flex-direction: column;
    }
  }
`;

export const Button = styled.button`
  font-size: 1em;
  border-radius: 20px;
  width: 100%;
  :hover {
    cursor: pointer;
    background-color: rgba(225, 225, 225, 0.5);
  }
`;
