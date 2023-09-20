import {logTaskResult} from '../helpers/log-task-result.mjs';

export function getTask5_1Result(yearsArray) {
  return yearsArray.map(year => {
    logTaskResult('Возраст:', getAge(year), true, 'год', 'года', 'лет');
    return getAge(year);
  });
}

function getAge(year) {
  return new Date().getFullYear() - year;
}
