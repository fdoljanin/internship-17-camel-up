import styled from "styled-components";
import { camelColors } from "../../consts/variables";

export const CamelButton = styled.button`
    width: 30px;
    height: 20px;
    background: ${props => camelColors[props.camel]};
    cursor: ${props => props.camel ? "pointer":"not-allowed"};
`