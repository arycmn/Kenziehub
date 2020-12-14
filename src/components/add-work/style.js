import styled from "styled-components";

export const Modal = styled.div`
  font-size: 12px;

  .header {
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  }
  .content {
    width: 100%;
    padding: 10px 5px;
    /* display: flex !important;
    flex-direction: column !important; */
  }
  .actions {
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  }
  .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input,
    textarea {
      width: 80%;
      padding: 10px;
    }

    input {
      height: 45px;
    }

    textarea {
      resize: none;
      height: 100px;
    }

    button {
      width: 50%;
      margin-top: 20px;
      padding: 10px;
    }
  }
`;
