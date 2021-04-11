import { Camels, NUMBER_OF_CELLS } from "../consts/consts";
import { getDieRoll } from "./random";

export const moveCamelInCells = (cells, camelToMove, steps) => {
  const oldCamelCellIndex = cells.findIndex((cell) =>
    cell.some((camel) => camel === camelToMove)
  );
  const newCamelCellIndex = Math.min(
    oldCamelCellIndex + steps,
    NUMBER_OF_CELLS - 1
  );

  const oldCamelCell = cells[oldCamelCellIndex];
  const camelHeight = oldCamelCell.findIndex((camel) => camel === camelToMove);

  cells[newCamelCellIndex].push(
    ...oldCamelCell.slice(camelHeight, oldCamelCell.length)
  );
  oldCamelCell.splice(camelHeight, oldCamelCell.length - camelHeight);
};

export const initCamelsInCells = (cells) => {
  const camels = Object.keys(Camels);
  for (let camel of camels) {
    cells[getDieRoll() - 1].push(camel);
  }
};
