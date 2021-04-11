import styled from "styled-components";

export const MessageOverlay = styled.div`
  position: fixed;
  background: #00000077;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 2;

  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;

  background: #b71;
  color: white;

  h2 {
    font-size: 20px;
    text-align: center;
  }

  button {
    cursor: pointer;
    background: #fff;
    border: 2px solid black;
    margin-top: 15px;
  }

  table,
  th,
  td {
    border: 1px solid white;
  }
`;
