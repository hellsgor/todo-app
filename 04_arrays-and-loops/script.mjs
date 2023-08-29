import {getTask4_2Result} from "./scripts/task2.mjs";
import {getTask4_1Result} from "./scripts/task1.mjs";
import {getTask4_3Result} from "./scripts/task3.mjs";

console.group('%cЗадача 4.1:', 'background-color: red; color: white;');
const task4_1Data = [
  {n: 0, m: 100, count: 100},
  {n: 2, m: 5, count: 50},
  {n: 100, m: -5, count: 70},
  {n: -3, m: -10, count: 42},
];
const task4_1Result = getTask4_1Result(task4_1Data);
console.groupEnd();

console.group('%cЗадача 4.2:', 'background-color: red; color: white;');
const task4_2Data = [5, 7, 3];
const task4_2Result = getTask4_2Result(task4_2Data);
console.groupEnd();

console.group('%cЗадача 4.3:', 'background-color: red; color: white;');
const task4_3Data = [3, 1, 7];
const task4_3Result = getTask4_3Result(task4_3Data, task4_2Result);
console.groupEnd();
