import { Camels } from "../consts/consts";
import { getRandomNumber } from "./random";

export const moveCamel = (cells, camelToMove, steps) => {
    let camelCellIndex = cells.findIndex(cell => cell.some(camel => camel === camelToMove));
    let newCamelCellIndex = Math.min(camelIndex + steps, 15);

    let oldCamelCell = cells[camelCellIndex];
    let camelHeight = oldCamelCell.findIndex(camel => camel === camelToMove);

    cells[newCamelCellIndex].push(oldCamelCell.slice(camelHeight, oldCamelCell.length()));
    oldCamelCell.splice(0, camelHeight);
}

export const initBoard = (cells) => {
    const camels = Object.keys(Camels);
    for (let camel of camels){
        cells[getRandomNumber(0,2)].push(camel);
    }
}