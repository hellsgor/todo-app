import {rectanglesArea} from "./scripts/task1.mjs";
import {fractNumbersCompare} from "./scripts/task2.mjs";
import {getCompare} from "./scripts/task3.mjs";


// task-1 ================================================================

console.group('%cЗадача 1:', 'background-color: red; color: white;');

const task1Data = [
  {x1: 2, y1: 3, x2: 10, y2: 5},
  {x1: 10, y1: 5, x2: 2, y2: 3},
  {x1: -5, y1: 8, x2: 10, y2: 5},
  {x1: 5, y1: 8, x2: 5, y2: 5},
  {x1: 8, y1: 1, x2: 5, y2: 1},
];
const task1Result = rectanglesArea(task1Data);

console.groupEnd();


// task-2 ================================================================

console.group('%cЗадача 2:', 'background-color: red; color: white;');

const task2Data = [
  {a: 13.123456789, b: 2.123, n: 5},
  {a: 13.890123, b: 2.891564, n: 2},
  {a: 13.890123, b: 2.891564, n: 3},
]
const task2Result = fractNumbersCompare(task2Data);

console.groupEnd();


// task-3 ================================================================

console.group('%cЗадача 3:', 'background-color: red; color: white;');

const task3Data = [
  {n: 0, m: 100},
  {n: 2, m: 5},
  {n: 100, m: -5},
  {n: -3, m: -10},
]
const task3Result = getCompare(task3Data);

console.groupEnd();
