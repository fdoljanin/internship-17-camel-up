import CellContainer from "../Cell";
import { NUMBER_OF_CELLS } from "../../consts/consts";
import { CellsGrid } from "./index.styled";

const Board = () => {
  return (
    <CellsGrid>
      {Array(NUMBER_OF_CELLS)
        .fill(0)
        .map((e, i) => (
          <CellContainer key={i} index={i} />
        ))}
    </CellsGrid>
  );
};

export default Board;
