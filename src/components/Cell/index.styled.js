import styled from "styled-components";
import { camelColors } from "../../consts/variables";

export const CamelDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px black solid;
  background: ${(props) => camelColors[props.camel]};
  animation: fallIn 2s;
  align-self: center;
  margin-bottom: 2px;

  @keyframes fallIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const CamelContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const CellContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;
  min-height: 100px;
  background: #eb5;
  border: 4px solid #b71;

  span {
    color: #b71;
    margin-left: 5px;
  }
`;
