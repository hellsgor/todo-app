import {errors} from "../errors.mjs";

export function getTask4_3Result(desiredNumbers, arrays) {
  const indexes = [];
  let desiredNumberCounter = -1;
  for (let array of arrays) {
    ++desiredNumberCounter;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === desiredNumbers[desiredNumberCounter]) {
        console.log(`Элемент массива со значением ${desiredNumbers[desiredNumberCounter]} найден! Его порядковый номер: ${i + 1}`);
        indexes.push(i);
        break;
      }
      if (array[i] !== desiredNumbers[desiredNumberCounter] && i === array.length - 1) {
        console.error(errors.elementNotFound);
      }
    }
  }
  return indexes;
}
