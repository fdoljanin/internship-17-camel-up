import {CamelDot, CamelContainer, CellContainer} from "./index.styled";

const Cell = ({index, cells}) => {
    return (
        <CellContainer>
            <span>{index+1}</span>
            <CamelContainer>
                {cells.map((camel, i) => <CamelDot key={i} camel={camel} />)}
            </CamelContainer>
        </CellContainer>
    )
}

export default Cell;