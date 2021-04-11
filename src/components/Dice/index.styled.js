import styled from "styled-components";
import { camelColors } from "../../consts/variables";

export const Die = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background: ${(props) => camelColors[props.camel]};
  margin: 2px;
  border: 2px solid black;
  animation: shine 1s;

  @keyframes shine {
    from,
    50% {
      filter: saturate(2) brightness(1.5);
    }
  }

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`;

export const DiceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: max-content;
`;
