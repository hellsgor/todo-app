'use strict'

import {getTask5_1Result} from "./scripts/task1.mjs";
import {getTask5_2Result} from "./scripts/task2.mjs";
import {getTask5_3Result} from "./scripts/task3.mjs";

console.group('%cЗадача 5.1:', 'background-color: red; color: white;');
const task5_1Data = [1998, 1991, 2007];
const task5_1Result = getTask5_1Result(task5_1Data);
console.log('Массив результатов (в виде чисел): ', task5_1Result);
console.groupEnd();

console.group('%cЗадача 5.2:', 'background-color: red; color: white;');
const task5_2Data = {
  whiteList: ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'],
  blackList: ['jsfunc@mail.ru', 'goodday@day.ru'],
};
const task5_2Result = getTask5_2Result(task5_2Data);
console.groupEnd();

console.group('%cЗадача 5.3:', 'background-color: red; color: white;');
const task5_3Data = [
  [2, 5, 1, 3, 4],
  [12, 33, 3, 44, 100],
  [0, 1],
  [3, 2, 1, 3, 0],
  [-22, 13, 2, -3, 42],
];
const task5_3Result = getTask5_3Result(task5_3Data);
console.groupEnd();
