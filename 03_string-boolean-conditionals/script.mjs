import {passwordCheck} from "./scripts/task1.mjs";
import {fullNameConversion} from "./scripts/task2.mjs";

console.group('%cЗадача 3.1:', 'background-color: red; color: white;');
const task3_1Data = [
  '1234-',
  '_-a',
  '4321_',
  'qaz',
  'qaz-xsw',
  '_-3',
  '_zxd',
  '123456789',
];
const task3_1Result = passwordCheck(task3_1Data);
console.groupEnd();

console.group('%cЗадача 3.2:', 'background-color: red; color: white;');
const task3_2Result = fullNameConversion(false);
console.groupEnd();
