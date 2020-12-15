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
    overflow: auto;
    width: 100%;
    padding: 10px 5px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
