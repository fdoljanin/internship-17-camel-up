import styled from "styled-components";
import {camelColors} from "../../consts/variables";

export const Die = styled.div`
    width: 20px;
    height: 20px;
    background: ${props => camelColors[props.camel]};
`