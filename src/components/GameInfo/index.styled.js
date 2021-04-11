import styled from "styled-components";
import {playerColors} from "../../consts/variables";

export const PlayerInfo = styled.div`
    color: ${props => playerColors[props.player]};
    filter: brightness(${props => props.isCurrent ? 1.0 : 0.05});
    text-decoration: ${props => props.isCurrent ? "underline" : "none"};
    `