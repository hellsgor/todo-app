export function getTask5_3Result(arrays) {
  return arrays.map((array, idx) => {
    const sorted = arrSort(array);
    console.log(`Отсортированный массив ${idx}: `, sorted);
    return sorted;
  })
}

function arrSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
