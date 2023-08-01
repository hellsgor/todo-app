import {getCompareResults, logTaskResult} from "./utils.mjs";

export function getCompare(array) {

  let task3Count = 0;

  return array.map(data => {

    ++task3Count;

    const min = Math.min(data.n, data.m);
    const max = Math.min(data.n, data.m) === data.n ? data.m : data.n;
    const range = Math.abs(data.n - data.m);
    const randomNum1 = getRandomNumber(min, range);
    const randomNum2 = getRandomNumber(min, range);

    const res3 = ({
      min,
      max,
      range,
      randomNum1,
      randomNum2,
      compares: getCompareResults(randomNum1, randomNum2),
    })

    logTaskResult(res3, task3Count);
    return res3;
  });
}

function getRandomNumber(min, range) {
  return Math.floor(Math.random() * (range + 1) + min);
}
