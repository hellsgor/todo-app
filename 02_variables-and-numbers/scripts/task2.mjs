import {getCompareResults, logTaskResult} from "./utils.mjs";

let task2Count = 0;

export function fractNumbersCompare(array) {
  return array.map(data => {

    ++task2Count;

    const firstNorm = getNormalize(data.a, data.n);
    const secondNorm = getNormalize(data.b, data.n);
    const compares = getCompareResults(firstNorm, secondNorm);

    const res2 = ({
      firstNorm,
      secondNorm,
      compares,
    })

    logTaskResult(res2, task2Count);

    return res2;
  });
}

function getNormalize(number, signs) {
  return Math.round(number % 1 * Math.pow(10, signs));
}
