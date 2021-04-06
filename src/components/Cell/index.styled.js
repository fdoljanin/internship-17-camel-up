import styled from "styled-components";
import {camelColors} from "../../consts/variables";

export const CamelDot = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px black solid;
    background: ${props => camelColors[props.camel]};
    animation: fallIn 2s;

    @keyframes fallIn {
        from {
            transform: translateY(-100px);
        } to {
            transform: translateY(0);
        }
    }
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