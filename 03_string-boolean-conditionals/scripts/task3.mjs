const messages = {
  even: 'Число чётное',
  odd: 'Число нечётное',
};

export function evenCheck(numbersArray) {
  return numbersArray.map(number => {
    const res = number % 2 === 0
      ? ({number, message: messages.even})
      : ({number, message: messages.odd})
    logEvenCheckResultItems(res);
    return res;
  })
}

function logEvenCheckResultItems(result) {
  console.log(`${result.number} - ${result.message}`);
}
