import { CamelDot, CamelContainer, CellContainer } from "./index.styled";
import { useCells } from "../../providers/cells/hooks";

const Cell = ({ index }) => {
    const [{ [index]: cellCamels }] = useCells();

    return (
        <CellContainer>
            <span>{index + 1}</span>
            <CamelContainer>
                {cellCamels.map((camel, i) =>
                    <CamelDot key={i} camel={camel} />)}
            </CamelContainer>
        </CellContainer>
    )
}

export default Cell;