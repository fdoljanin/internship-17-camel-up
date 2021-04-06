import { Camels } from "../consts/consts";
import { getDiceRoll } from "./random";

export const moveCamel = (cells, camelToMove, steps) => {
    let camelCellIndex = cells.findIndex(cell => cell.some(camel => camel === camelToMove));
    let newCamelCellIndex = Math.min(camelCellIndex + steps, 15);
    let oldCamelCell = cells[camelCellIndex];
    let camelHeight = oldCamelCell.findIndex(camel => camel === camelToMove);

    cells[newCamelCellIndex].push(...oldCamelCell.slice(camelHeight, oldCamelCell.length));
    oldCamelCell.splice(camelHeight, oldCamelCell.length - camelHeight);
}

export const initBoard = (cells) => {
    const camels = Object.keys(Camels);
    for (let camel of camels) {
        cells[getDiceRoll() - 1].push(camel);
    }
}