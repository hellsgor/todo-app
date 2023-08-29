export function getTask4_2Result(counts) {
  let counter = 0;
  return counts.map((count) => {
    ++counter;
    const newArray = [];
    for (let i = 0; i < count; i++) {
      newArray.push(i + 1);
    }
    for (let i = 0; i < newArray.length; i++) {
      let j = Math.floor(Math.random() * newArray.length);
      let temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    console.log(`Результат № ${counter}`, newArray);
    return newArray;
  });
}
