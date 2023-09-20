'use strict'

import {getTask5_1Result} from "./scripts/task1.mjs";
import {getTask5_2Result} from "./scripts/task2.mjs";

console.group('%cЗадача 5.1:', 'background-color: red; color: white;');
const task5_1Data = [1998, 1991, 2007];
const task5_1Result = getTask5_1Result(task5_1Data);
console.groupEnd();

console.group('%cЗадача 5.2:', 'background-color: red; color: white;');
const task5_2Data = {
  whiteList: ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'],
  blackList: ['jsfunc@mail.ru', 'goodday@day.ru'],
};
const task5_2Result = getTask5_2Result(task5_2Data);
console.groupEnd();
