import styled from "styled-components";
import { camelColors } from "../../consts/variables";

export const CamelButton = styled.button`
    width: 60px;
    height: 30px;
    background: ${props => camelColors[props.camel]};
    cursor: ${props => props.camel !== "camelForbidden" ? "pointer" : "not-allowed"};
    border: 2px solid black;
`