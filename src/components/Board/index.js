import CellContainer from "../Cell";
import { CellsGrid } from "./index.styled";


const Board = () => {
    return (
        <CellsGrid>
            {Array(16).fill(0).map((e, i) =>
                <CellContainer key={i} index={i} />)}
        </CellsGrid>
    )
}

export default Board;