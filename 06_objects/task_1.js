// Обязательная часть задания
let user1 = {
  name: 'Игорь',
  age: 17
}

let user2 = {
  name: 'Оля',
  age: 21
}

function getOlderUser(userOne, userTwo) {
  if (userOne.age === userTwo.age) {
    return `${userOne.name} и ${userTwo.name} ровесники`;
  } else if (userOne.age > userTwo.age) {
    return userOne.name;
  } else {
    return userTwo.name;
  }
}

let result = getOlderUser(user1, user2)
console.log('Старший пользователь:', result);


// Не обязательная часть задания
let allUsers = [
  {
    name: 'Валя',
    age: 11
  },
  {
    name: 'Таня',
    age: 24
  },
  {
    name: 'Рома',
    age: 21
  },
  {
    name: 'Надя',
    age: 34
  },
  {
    name: 'Антон',
    age: 7
  }
]

function getOlderUserArray(usersArray) {
  if (Array.isArray(usersArray) && usersArray.length > 1) {
    const newUserArray = [...usersArray].sort((a, b) => {
      if (a.age < b.age) return 1;
      if (a.age === b.age) return 0;
      if (a.age > b.age) return -1;
    })

    let olderUsersNumber = 1;
    let olderUser;
    let olderUsersNames = newUserArray[0].name;

    for (let i = 0; i < newUserArray.length - 1; i++) {
      if (newUserArray[i].age !== newUserArray[i + 1].age) {
        olderUser = newUserArray[i].name;
        break;
      } else if (newUserArray[i].age === newUserArray[i + 1].age) {
        olderUsersNumber += 1;
        olderUsersNames = olderUsersNames + ', ' + newUserArray[i + 1].name;
      }
    }
    
    if (olderUsersNumber === 1) {
      return olderUser;
    } else {
      return `не найден. Пользователей старшего, при этом равного, возраста ${olderUsersNumber}: ${olderUsersNames}`;
    }
  }
}

let result2 = getOlderUserArray(allUsers)
console.log('Старший пользователь:', result2);
