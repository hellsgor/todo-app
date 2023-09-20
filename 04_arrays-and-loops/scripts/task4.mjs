export function getTask4_4Result({array1, array2}) {
  const newArray = [...array1];

  for (let item of array2) {
    newArray.push(item);
  }
  
  console.log(newArray);
  return newArray;
}
