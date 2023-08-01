export function logTaskResult(deduce, count) {

  console.group(`%cРезультат ${count}:`, 'background-color: yellowgreen; color: black;');

  if (deduce.randomNum1) {
    console.log('Диапазон случайных чисел:', deduce.min, deduce.max);
    console.log('Случайное число 1', deduce.randomNum1);
    console.log('Случайное число 2', deduce.randomNum2);
  } else {
    console.log(`Приведенные к целым дробные части чисел: ${deduce.firstNorm} и ${deduce.secondNorm}`);
  }

  console.group('Сравнения');

  if (deduce.randomNum1) {
    Object.entries(deduce.compares).forEach(compare =>
      console.log(`${deduce.randomNum1} ${compare[0]} ${deduce.randomNum2}`, compare[1]));
  } else {
    Object.entries(deduce.compares).forEach(compare =>
      console.log(`${deduce.firstNorm} ${compare[0]} ${deduce.secondNorm}`, compare[1]));
  }

  console.groupEnd();
  console.groupEnd();

}

export function getCompareResults(first, second) {
  return ({
    '>': first > second,
    '<': first < second,
    '>=': first >= second,
    '<=': first <= second,
    '===': first === second,
    '!==': first !== second,
  })
}
