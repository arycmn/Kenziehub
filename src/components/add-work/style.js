import styled from "styled-components";

export const Modal = styled.div`
  font-size: 20px;

  .header {
    width: 100%;
    border: none;
    font-size: 18px;
    text-align: center;
    padding: 5px;
    border-radius: 20px;
  }
  .content {
    width: 100%;
    padding: 10px 5px;
    border-radius: 20px;
    /* display: flex !important;
    flex-direction: column !important; */
  }
  .actions {
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    border-radius: 20px;
    text-align: center;
    color: black;
  }
  .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 30px;
    font-family: "offside";
    border-radius: 10px;
    border: 1px solid;
  }
  .add {
    font-size: 20px;
    color: yellow;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3%;
    border-radius: 20px;

    input,
    textarea {
      width: 80%;
      padding: 10px;
      border-radius: 10px;
      border-color: black;
    }

    input {
      width: 80%;
      padding: 10px;
      border-radius: 10px;
      border-color: #ddbea9;
      padding: 3%;
      margin: 3%;
    }

    textarea {
      width: 80%;
      padding: 3%;
      margin: 3%;
      resize: none;
      height: 100px;
      border-radius: 10px;
      border-color: black;
    }

    button {
      width: 50%;
      margin-top: 20px;
      padding: 18px;
      border-radius: 10px;
      background: rgb(255, 174, 66);
      border: none;
    }
  }
`;
