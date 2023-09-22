let objects = [
  {name: 'Василий', surname: 'Васильев'},
  {name: 'Иван', surname: 'Иванов'},
  {name: 'Пётр', surname: 'Петров'}
]


function filter1(arr, prop, value) {
  // Здесь решение задачи
  // arr - массив объектов
  // prop - свойство по которому производится фильтрация
  // value - значение свойства по которому производится фильтрация
  const filtered = [];
  for (let arrItem of arr) {
    if (arrItem[prop] === value) {
      filtered.push(arrItem);
    }
  }
  return filtered;
}

function filter2(array, prop, value) {
  return array.filter((arrayItem) => arrayItem[prop] === value);
}

let result1 = filter1(objects, 'name', 'Иван');
console.log(result1);

let result2 = filter2(objects, 'surname', 'Васильев');
console.log(result2);
