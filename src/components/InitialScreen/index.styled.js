import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background: #eb5;
  padding: 20px;
  border-radius: 20px;
  width: 350px;
  h1 {
    text-align: center;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  button {
    background: white;
    border: 2px solid black;
    cursor: pointer;
  }
`;
