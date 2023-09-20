import {logTaskResult} from '../helpers/log-task-result.mjs';

export function getTask5_1Result(yearsArray) {
  return yearsArray.map(year => {
    const age = getAge(year);
    logTaskResult('Возраст:', age, true, 'год', 'года', 'лет');
    return age;
  });
}

function getAge(year) {
  return new Date().getFullYear() - year;
}
