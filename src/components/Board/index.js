import CellContainer from "../Cell";
import {useCells} from "../../providers/cells/hooks";
import { CellsGrid } from "./index.styled";


const Board = () => {
    const [cells,] = useCells();
    //console.log(cells);

    return (
    <CellsGrid>
        {Array(16).fill(0).map((e, i) => <CellContainer key={i} index={i} cells={cells[i]}/>)}
    </CellsGrid>
    )
}

export default Board;