import styled from "styled-components";
import {camelColors} from "../../consts/variables";

export const CamelDot = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px black solid;
    background: ${props => camelColors[props.camel]};
`

export const CamelContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
`

export const CellContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;